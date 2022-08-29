import { Router } from "express";
import postRouter from "../../../../modules/post/infra/http/routes/post.route";
import { sessionRouter } from "../../../../modules/users/infra/http/routes/session.route";
import userRouter from "../../../../modules/users/infra/http/routes/user.route";



const routes = Router();

routes.use('/user', userRouter);
routes.use('/session', sessionRouter);
routes.use('/post', postRouter);

export default routes;