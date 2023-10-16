import express from "express";
import {AuthRoutes} from "../modules/auth/auth.route";
import {UserRoutes} from "../modules/user/user.route";
import {CartRoutes} from "../modules/cart/cart.route";
import {OrderRoutes} from "../modules/order/order.route";
import {ServiceRoutes} from "../modules/service/service.route";

const router = express.Router();
//
const moduleRoutes = [
  {path: "/auth", route: AuthRoutes},
  {path: "/users", route: UserRoutes},
  {path: "/services", route: ServiceRoutes},
  {path: "/carts", route: CartRoutes},
  {path: "/bookings", route: OrderRoutes},
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
