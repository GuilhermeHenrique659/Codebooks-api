import { Request, Response } from "express";
import { CodeUseCaseFactory } from "../../../domain/useCases/CodeUseCaseFactory";



export class CodeController {
    constructor(private _useCaseFactory: CodeUseCaseFactory) { }

    public async create(request: Request, response: Response): Promise<Response> {
        const { code, language, post_id } = request.body;
        const user_id = request.user.id;

        const createCode = this._useCaseFactory.GetCreateCodeUseCase();

        const codeOutput = await createCode.execute({
            code: code,
            language: language,
            user_id: user_id,
            post_id: post_id
        });

        return response.json(codeOutput);
    }

    public async index(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const listCode = this._useCaseFactory.GetListCodeUseCase();

        const codes = await listCode.execute({
            post_id: id
        });

        return response.json(codes);
    }

}