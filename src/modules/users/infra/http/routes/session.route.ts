import { celebrate } from "celebrate";
import { Router } from "express";
import { RouteAdapter } from "../../../../../shared/infra/adapter/http/expressRouteAdapter";
import { userBody } from "../../../validation/userValidation";
import { userControllerFactory } from "../controllers/UserCOntrollerFactory";


const sessionRouter = Router();

sessionRouter.post("/", celebrate(userBody.createSessionIsValid()), RouteAdapter(userControllerFactory.getSession()));


export { sessionRouter };
