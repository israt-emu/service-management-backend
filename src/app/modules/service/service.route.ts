import express from "express";
import {validateRequest} from "../../middlewares/validateRequest";
import {createService, deleteService, findAllService, findSingleService, modifyService} from "./service.controller";
import {createServiceZodSchema, updateServiceZodSchema} from "./service.validation";
import {ENUM_USER_ROLE} from "../../../enums/user";
import {auth} from "../../middlewares/auth";

const router = express.Router();

//,

router.post("/", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), validateRequest(createServiceZodSchema), createService);
router.get("/:id", findSingleService);
router.delete("/:id", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), deleteService);
router.patch("/:id", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), validateRequest(updateServiceZodSchema), modifyService);
router.get("/", findAllService);

//
export const ServiceRoutes = router;
