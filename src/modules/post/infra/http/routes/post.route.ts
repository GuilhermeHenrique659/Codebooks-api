import { Router } from "express";
import isAuthenticated from "../../../../../shared/infra/http/middleware/IsAuthenticated";
import { postUseCaseFactory } from "../../../domain/useCases/PostUseCaseFactory";
import { PostController } from "../controller/PostController";


const postController = new PostController(postUseCaseFactory);

const postRouter = Router();

postRouter.post("/", isAuthenticated, (request, response) => {
    return postController.create(request, response);
});

postRouter.get('/', isAuthenticated, (request, response) => {
    return postController.index(request, response);
});

export default postRouter;