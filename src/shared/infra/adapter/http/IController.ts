import { IHttpRequest, IHttpResponse } from "./IHttpAdapter";


export interface IController {
    handle(httpRequest: IHttpRequest): Promise<IHttpResponse>;
}