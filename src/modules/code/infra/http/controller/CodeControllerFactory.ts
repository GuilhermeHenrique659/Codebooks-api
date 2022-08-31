import { codeUseCaseFactory, CodeUseCaseFactory } from "../../../domain/useCases/CodeUseCaseFactory";
import { CreateCodeController } from "./CreateCodeController";
import { ListCodeController } from "./ListCodeController";


export class CodeControllerFactory {
    constructor(private _useCaseFactory: CodeUseCaseFactory) { }

    public getIndex(): ListCodeController {
        return new ListCodeController(this._useCaseFactory);
    }

    public getCreate(): CreateCodeController {
        return new CreateCodeController(this._useCaseFactory);
    }
}

export const codeControllerFactory = new CodeControllerFactory(codeUseCaseFactory);