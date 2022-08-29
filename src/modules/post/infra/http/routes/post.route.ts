import { Router } from "express";
import isAuthenticated from "../../../../../shared/infra/http/middleware/IsAuthenticated";
import { userRepository } from "../../../../users/domain/useCases";
import { PostRepository } from "../../../domain/repositories/PostRepository";
import { CreatePostUseCase } from "../../../domain/useCases/CreatePostUseCase/CreatePostUseCase";
import { postRepositoryOrm } from "../../typeorm/PostRepostiroyOrm";
import { PostController } from "../controller/PostController";


const postRepository = new PostRepository(postRepositoryOrm);
const createPostUseCase = new CreatePostUseCase(postRepository, userRepository);
const postController = new PostController(createPostUseCase);

const postRouter = Router();

postRouter.post("/", isAuthenticated, (request, response) => {
    return postController.create(request, response);
});

export default postRouter;