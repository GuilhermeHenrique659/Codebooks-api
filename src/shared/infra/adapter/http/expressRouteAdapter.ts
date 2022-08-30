import { Request, Response } from "express";
import { PostController } from "../../../../modules/post/infra/http/controller/PostController";
import { IHttpRequest } from './IHttpAdapter';

export const RouteAdapter = (controller: PostController, method: keyof PostController) => {
    return async (request: Request, response: Response) => {
        const httpRequest: IHttpRequest = {
            body: request.body,
            params: request.params,
            user: request.user.id
        };

        if (method == 'index') {
            const httpResponse = await controller.index(httpRequest);
            response.status(httpResponse.statusCode).json(httpResponse.body);
        } else if (method == 'create') {
            const httpResponse = await controller.create(httpRequest);
            response.status(httpResponse.statusCode).json(httpResponse.body);
        }
    }
}