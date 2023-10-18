import express from "express";
import {validateRequest} from "../../middlewares/validateRequest";
import {createCart, deleteCart, getCartByUser, getSingleCart, handleQuantity} from "./cart.controller";
import {createCartZodSchema, deleteCartZodSchema, handleQuantityZodSchema} from "./cart.validation";

const router = express.Router();
//,

router.post("/", validateRequest(createCartZodSchema), createCart);
router.post("/delete", validateRequest(deleteCartZodSchema), deleteCart);
router.post("/handleQuantity", validateRequest(handleQuantityZodSchema), handleQuantity);
router.get("/:id", getCartByUser);
router.get("/", getSingleCart);

//
export const CartRoutes = router;
