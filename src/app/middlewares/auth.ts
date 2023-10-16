import {NextFunction, Request, Response} from "express";
import httpStatus from "http-status";
import {Secret} from "jsonwebtoken";
import {ApiError} from "../../handleErrors/ApiError";
import {verifyToken} from "../../shared/jwtHelpers";
import config from "../../config";

export const auth =
  (...roles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    let verifiedUser = null;
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
      }
      //verify token
      verifiedUser = verifyToken(token, config.jwt.secret as Secret);

      req.user = verifiedUser;
      //   role guard
      const {role} = verifiedUser;
      if (roles.length > 0 && !roles.includes(role)) {
        throw new ApiError(httpStatus.FORBIDDEN, "Request Forbidden");
      }
      next();
    } catch (error) {
      next(error);
    }
  };
