import { celebrate } from "celebrate";
import { Router } from "express";
import { userUseCaseFactory } from "../../../domain/useCases";
import { userBody } from "../../../validation/userValidation";
import { UserController } from "../controllers/UserController";


const userRouter = Router();
const userController = new UserController(userUseCaseFactory)

userRouter.post('/', celebrate(userBody.createUserIsValid()), (request, response) => {
    return userController.index(request, response)
})

export default userRouter;