import express from "express";
import {loginUser, refreshToken, signUp} from "./auth.controller";
import {validateRequest} from "../../middlewares/validateRequest";
import {loginZodSchema, refreshTokenZodSchema, signUpZodSchema} from "./auth.validation";
const router = express.Router();
//
router.post("/signup", validateRequest(signUpZodSchema), signUp);
router.post("/login", validateRequest(loginZodSchema), loginUser);
router.post("/refresh-token", validateRequest(refreshTokenZodSchema), refreshToken);
//
export const AuthRoutes = router;
