import { Request, Response } from "express";
import { IController } from "../../../factories/controller/IController";
import { IHttpRequest } from './IHttpAdapter';

export const RouteAdapter = (controller: IController) => {
    return async (request: Request, response: Response) => {
        const httpRequest: IHttpRequest = {
            body: request.body,
            params: request.params,
            user: request.user
        };
        const httpResponse = await controller.handle(httpRequest);
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }
}