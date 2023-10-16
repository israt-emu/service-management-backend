import {Schema, model} from "mongoose";
import {IUser, UserModel} from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../../config";
import {IExistingUser} from "../auth/auth.interface";
import {roleEnums} from "../auth/auth.utils";

const UserSchema = new Schema<IUser, UserModel>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      select: 0,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: roleEnums,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);
//check user existence bu email
UserSchema.methods.isUserExist = async function (email: string): Promise<IExistingUser | null> {
  return await User.findOne({email}, {_id: 1, password: 1, email: 1, role: 1}).lean();
};
//check by id
UserSchema.methods.isUserExistById = async function (id: string): Promise<IExistingUser | null> {
  return await User.findOne({_id: id}, {_id: 1, password: 1, role: 1}).lean();
};
//check password match
UserSchema.methods.isPasswordMatched = async function (givenPass: string, savedPass: string): Promise<boolean> {
  return await bcrypt.compare(givenPass, savedPass);
};
//hasing password
UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.password) {
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds));
  }
  next();
});
//create model
export const User = model<IUser, UserModel>("User", UserSchema);
