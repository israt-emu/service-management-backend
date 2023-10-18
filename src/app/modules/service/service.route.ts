import express from "express";
import {validateRequest} from "../../middlewares/validateRequest";
import {createService, deleteService, findAllService, findSingleService, modifyService} from "./service.controller";
import {createServiceZodSchema, updateServiceZodSchema} from "./service.validation";

const router = express.Router();

//,

router.post("/", validateRequest(createServiceZodSchema), createService);
router.get("/:id", findSingleService);
router.delete("/:id", deleteService);
router.patch("/:id", validateRequest(updateServiceZodSchema), modifyService);
router.get("/", findAllService);

//
export const ServiceRoutes = router;
