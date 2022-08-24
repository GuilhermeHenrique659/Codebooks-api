import { request, response, Router } from "express";
import { UserController } from "../controllers/UserController";
import { createUser } from "../../../domain/useCases/CreateUse";



const userRouter = Router();
const userController = new UserController(createUser)

userRouter.post('/', (request, response) => {
    return userController.index(request,response)
})

export default userRouter;