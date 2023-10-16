import express from "express";
import {AuthRoutes} from "../modules/auth/auth.route";
import {UserRoutes} from "../modules/user/user.route";
import {ProductRoutes} from "../modules/product/product.route";
import {CartRoutes} from "../modules/cart/cart.route";
import {OrderRoutes} from "../modules/order/order.route";

const router = express.Router();
//
const moduleRoutes = [
  {path: "/auth", route: AuthRoutes},
  {path: "/users", route: UserRoutes},
  {path: "/services", route: ProductRoutes},
  {path: "/carts", route: CartRoutes},
  {path: "/bookings", route: OrderRoutes},
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
