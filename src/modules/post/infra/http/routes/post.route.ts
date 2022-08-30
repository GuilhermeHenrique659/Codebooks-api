import { Router } from "express";
import { RouteAdapter } from "../../../../../shared/infra/adapter/http/expressRouteAdapter";
import isAuthenticated from "../../../../../shared/infra/http/middleware/IsAuthenticated";
import { userRepository } from "../../../../users/domain/useCases";
import { PostRepository } from "../../../domain/repositories/PostRepository";
import { PostUseCaseFactory } from "../../../domain/useCases/PostUseCaseFactory";
import { postRepositoryOrm } from "../../typeorm/PostRepostiroyOrm";
import { PostController } from "../controller/PostController";



const postControllerFactory = (): PostController => {
    const postRepository = new PostRepository(postRepositoryOrm);
    const postUseCaseFactory = new PostUseCaseFactory(userRepository, postRepository);
    return new PostController(postUseCaseFactory);
}

const postRouter = Router();

postRouter.get('/', isAuthenticated, RouteAdapter(postControllerFactory(), 'index'));

export default postRouter;