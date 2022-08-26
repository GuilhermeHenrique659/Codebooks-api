import { celebrate } from "celebrate";
import { Router } from "express";
import { userUseCaseFactory } from "../../../domain/useCases";
import { userBody } from "../../../validation/userValidation";
import { SessionController } from "../controllers/SessionController";


const sessionRouter = Router();
const sessionController = new SessionController(userUseCaseFactory);

sessionRouter.post("/", celebrate(userBody.createSessionIsValid()), (request, response) => {
    return sessionController.create(request, response);
})


export { sessionRouter };
