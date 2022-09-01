import { Router } from "express";
import { RouteAdapter } from "../../../../../shared/infra/adapter/http/expressRouteAdapter";
import isAuthenticated from "../../../../../shared/infra/http/middleware/IsAuthenticated";
import { postControllerFactory } from "../controller/PostControllerFactory";



const postRouter = Router();

postRouter.get('/', isAuthenticated, RouteAdapter(postControllerFactory.getIndexController()));

postRouter.post('/', isAuthenticated, RouteAdapter(postControllerFactory.getCreateController()));

export default postRouter;