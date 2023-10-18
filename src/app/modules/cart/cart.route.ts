import express from "express";
import {validateRequest} from "../../middlewares/validateRequest";
import {createCart, deleteCart, getCartByUser, getSingleCart, handleQuantity} from "./cart.controller";
import {createCartZodSchema, deleteCartZodSchema, handleQuantityZodSchema} from "./cart.validation";
import {ENUM_USER_ROLE} from "../../../enums/user";
import {auth} from "../../middlewares/auth";

const router = express.Router();
//

router.post("/", auth(ENUM_USER_ROLE.USER), validateRequest(createCartZodSchema), createCart);
router.post("/delete", auth(ENUM_USER_ROLE.USER), validateRequest(deleteCartZodSchema), deleteCart);
router.post("/handleQuantity", auth(ENUM_USER_ROLE.USER), validateRequest(handleQuantityZodSchema), handleQuantity);
router.get("/:id", getCartByUser);
router.get("/", getSingleCart);

//
export const CartRoutes = router;
