import { Router } from "express";
import { RouteAdapter } from "../../../../../shared/infra/adapter/http/expressRouteAdapter";
import isAuthenticated from "../../../../../shared/infra/http/middleware/IsAuthenticated";
import { codeControllerFactory } from "../controller/CodeControllerFactory";


const codeRouter = Router();

codeRouter.post('/', isAuthenticated, RouteAdapter(codeControllerFactory.getCreate()));

codeRouter.get('/:id', isAuthenticated, RouteAdapter(codeControllerFactory.getIndex()));

export default codeRouter;