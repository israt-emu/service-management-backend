import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import {Request, Response} from "express";
import {pick} from "../../../shared/pick";
import {paginationFields} from "../../../constant/pagination";
import {IService} from "./service.interface";
import {addNewService, deleteServiceById, getAllServices, getSingleService, updateService} from "./service.service";
import {serviceFilterableFields} from "./service.constant";

export const createService = catchAsync(async (req: Request, res: Response) => {
  const service = req.body;

  const newService = await addNewService(service);
  sendResponse<IService>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service created successfully!",
    data: newService,
  });
});
//get all Service
export const findAllService = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, serviceFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const services = await getAllServices(filters, paginationOptions);
  sendResponse<IService[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service retrieved successfully!",
    meta: services.meta,
    data: services.data,
  });
});
//get a single Service
export const findSingleService = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const service = await getSingleService(id);
  sendResponse<IService>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service retrieved successfully!",
    data: service,
  });
});
//update Service
export const modifyService = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req?.body;
  const result = await updateService(id, updatedData);
  sendResponse<IService>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service updated successfully!",
    data: result,
  });
});
//delete Service
export const deleteService = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const service = await deleteServiceById(id);

  sendResponse<IService>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service deleted successfully!",
    data: service,
  });
});

