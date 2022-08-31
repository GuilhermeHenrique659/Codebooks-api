import { celebrate } from "celebrate";
import { Router } from "express";
import { RouteAdapter } from "../../../../../shared/infra/adapter/http/expressRouteAdapter";
import { userBody } from "../../../validation/userValidation";
import { userControllerFactory } from "../controllers/UserCOntrollerFactory";


const userRouter = Router();

userRouter.post('/', celebrate(userBody.createUserIsValid()), RouteAdapter(userControllerFactory.getCreate()));

export default userRouter;