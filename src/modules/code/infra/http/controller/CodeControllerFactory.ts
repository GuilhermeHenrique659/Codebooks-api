import { IAbstractControllerFactory } from "../../../../../shared/factories/controller/AbstractControllerFactory";
import { IController } from "../../../../../shared/factories/controller/IController";
import { IAbstractUseCaseFactory } from "../../../../../shared/factories/useCase/AbstractUseCaseFactory";
import { Code } from "../../../domain/entities/Code";
import { codeUseCaseFactory } from "../../../domain/useCases/CodeUseCaseFactory";
import { CreateCodeController } from "./CreateCodeController";
import { ListCodeController } from "./ListCodeController";


export class CodeControllerFactory implements IAbstractControllerFactory {
    constructor(private _useCaseFactory: IAbstractUseCaseFactory<Code>) { }

    public getIndexController(): IController {
        return new ListCodeController(this._useCaseFactory);
    }

    public getCreateController(): IController {
        return new CreateCodeController(this._useCaseFactory);
    }
    public getUpdateController(): IController {
        throw new Error('Not implements');
    }

    public getDeleteController(): IController {
        throw new Error('Not implements');
    }
}

export const codeControllerFactory = new CodeControllerFactory(codeUseCaseFactory);