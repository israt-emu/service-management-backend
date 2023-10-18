import express from "express";
import {AuthRoutes} from "../modules/auth/auth.route";
import {UserRoutes} from "../modules/user/user.route";
import {CartRoutes} from "../modules/cart/cart.route";
import {ServiceRoutes} from "../modules/service/service.route";
import {BookingRoutes} from "../modules/booking/booking.route";
import {ReviewAndRatingRoutes} from "../modules/reviewAndRating/reviewAndRating.route";
import {BlogRoutes} from "../modules/blog/blog.route";
import {FaqRoutes} from "../modules/faq/faq.route";
import {FeedbackRoutes} from "../modules/feedBack/feedBack.route";

const router = express.Router();
//
const moduleRoutes = [
  {path: "/auth", route: AuthRoutes},
  {path: "/users", route: UserRoutes},
  {path: "/services", route: ServiceRoutes},
  {path: "/carts", route: CartRoutes},
  {path: "/bookings", route: BookingRoutes},
  {path: "/reviewRatings", route: ReviewAndRatingRoutes},
  {path: "/blog", route: BlogRoutes},
  {path: "/faq", route: FaqRoutes},
  {path: "/feedbacks", route: FeedbackRoutes},
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
