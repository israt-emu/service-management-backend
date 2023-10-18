import express from "express";
import {getAllUsers, getSingleUser, getUserProfile, makeAdmin} from "./user.controller";
import {auth} from "../../middlewares/auth";
import {ENUM_USER_ROLE} from "../../../enums/user";

const router = express.Router();
//

router.get("/:id", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), getSingleUser);
router.get("/", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), getAllUsers);
router.get("/profile", auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), getUserProfile);
router.get("/make-admin/:email", auth(ENUM_USER_ROLE.SUPER_ADMIN), makeAdmin);
//
export const UserRoutes = router;
