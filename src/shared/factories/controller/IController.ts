import { IHttpRequest, IHttpResponse } from "../../infra/adapter/http/IHttpAdapter";


export interface IController {
    handle(httpRequest: IHttpRequest): Promise<IHttpResponse>;
}