import express from "express";
import {deleteUser, getAllUsers, getSingleUser, getUserProfile, makeAdmin, updateUser} from "./user.controller";
import {auth} from "../../middlewares/auth";
import {ENUM_USER_ROLE} from "../../../enums/user";

const router = express.Router();
//
router.get("/profile", auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), getUserProfile);
router.get("/:id", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), getSingleUser);
router.get("/", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), getAllUsers);

router.post("/make-admin/:email", auth(ENUM_USER_ROLE.SUPER_ADMIN), makeAdmin);
router.patch("/", updateUser);
router.delete("/:id", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), deleteUser);
//
export const UserRoutes = router;
