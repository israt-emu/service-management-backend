import httpStatus from "http-status";
import {ApiError} from "../../../handleErrors/ApiError";
import {SortOrder} from "mongoose";
import {IGenericPaginationResponse, IPaginationOptions} from "../../../interfaces/pagination";
import {calculatePagination} from "../../../shared/paginationHelper";
import {IService, IServiceFilters} from "./service.interface";
import {Service} from "./service.model";
import {serviceSearchableFields} from "./service.constant";

//add service
export const addNewService = async (payload: IService) => {
  const newService = await Service.create(payload);
  if (!newService) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create service!");
  }
  return newService;
};
//get all services
export const getAllServices = async (filters: IServiceFilters, paginationOptions: IPaginationOptions): Promise<IGenericPaginationResponse<IService[]>> => {
  //pagination
  const {page, limit, skip, sortBy, sortOrder} = calculatePagination(paginationOptions);
  const sortConditions: {[key: string]: SortOrder} = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //search
  const {searchTerm, ...filtersData} = filters;
  const andconditions = [];
  if (searchTerm) {
    andconditions.push({
      $or: serviceSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }
  //filtering
  if (Object.keys(filtersData).length > 0) {
    andconditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => {
        if (field === "minPrice") {
          return {price: {$gte: value}};
        } else if (field === "maxPrice") {
          return {price: {$lte: value}};
        } else {
          return {[field]: value};
        }
      }),
    });
  }
  const whereCondition = andconditions?.length > 0 ? {$and: andconditions} : {};
  const services = await Service.find(whereCondition).sort(sortConditions).skip(skip);
  const count = await Service.countDocuments(whereCondition);
  return {
    meta: {
      page,
      limit,
      count,
    },
    data: services,
  };
};

//get a single service
export const getSingleService = async (id: string): Promise<IService | null> => {
  const service = await Service.findById({_id: id});
  return service;
};
//update service
export const updateService = async (id: string, payload: Partial<IService>): Promise<IService | null> => {
  const isExist = await Service.findOne({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Service not found!");
  }

  const result = await Service.findOneAndUpdate({_id: id}, payload, {
    new: true,
  });
  return result;
};

//delete Service
export const deleteServiceById = async (id: string): Promise<IService | null> => {
  const isExist = await Service.findOne({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Service not found!");
  }
  const result = await Service.findOneAndDelete({_id: id});
  return result;
};


