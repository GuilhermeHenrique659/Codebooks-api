import { Router } from "express";
import isAuthenticated from "../../../../../shared/infra/http/middleware/IsAuthenticated";
import { codeUseCaseFactory } from "../../../domain/useCases/CodeUseCaseFactory";
import { CodeController } from "../controller/CodeController";


const codecontroller = new CodeController(codeUseCaseFactory);

const codeRouter = Router();

codeRouter.post('/', isAuthenticated, (request, response) => {
    return codecontroller.create(request, response);
})

codeRouter.get('/:id', isAuthenticated, (request, response) => {
    return codecontroller.index(request, response);
})

export default codeRouter;