import { celebrate } from "celebrate";
import { Router } from "express";
import { RouteAdapter } from "../../../../../shared/infra/adapter/http/expressRouteAdapter";
import isAuthenticated from "../../../../../shared/infra/http/middleware/IsAuthenticated";
import { userBody } from "../../../validation/userValidation";
import { userControllerFactory } from "../controllers/UserControllerFactory";


const userRouter = Router();

userRouter.post('/', celebrate(userBody.createUserIsValid()), RouteAdapter(userControllerFactory.getCreate()));

userRouter.patch('/:id', isAuthenticated, RouteAdapter(userControllerFactory.getUpdate()));

export default userRouter;