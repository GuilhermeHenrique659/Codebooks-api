import { Router } from "express";
import { userUseCaseFactory } from "../../../domain/useCases";
import { UserController } from "../controllers/UserController";



const userRouter = Router();
const userController = new UserController(userUseCaseFactory)

userRouter.post('/', (request, response) => {
    return userController.index(request, response)
})

export default userRouter;