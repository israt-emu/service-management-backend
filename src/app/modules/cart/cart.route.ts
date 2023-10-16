import express from "express";
import {validateRequest} from "../../middlewares/validateRequest";
import {createCart, deleteCart, getCartByUser, getSingleCart, handleQuantity} from "./cart.controller";

const router = express.Router();
//,

router.post("/", createCart);
router.post("/delete", deleteCart);
router.post("/handleQuantity", handleQuantity);
router.get("/:id", getCartByUser);
router.get("/", getSingleCart);

//
export const CartRoutes = router;
