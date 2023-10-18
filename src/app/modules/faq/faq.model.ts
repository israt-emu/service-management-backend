import {Schema, model} from "mongoose";
import {FaqModel, IFaq} from "./faq.interface";

const FaqSchema = new Schema<IFaq, FaqModel>(
  {
    question: {
      type: String,
      required: true,
    },

    answer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
//create model
export const Faq = model<IFaq, FaqModel>("Faq", FaqSchema);
