import { IAbstractUseCaseFactory } from "../../../../shared/factories/useCase/AbstractUseCaseFactory";
import { IUseCase } from "../../../../shared/factories/useCase/IUseCase";
import { IPostRepository } from "../../../post/domain/repositories/IPostRepository";
import { postRepository } from "../../../post/domain/useCases/PostUseCaseFactory";
import { IUserRepository } from "../../../users/domain/repositories/IUserRepository";
import { userRepository } from "../../../users/domain/useCases";
import { codeRepositoryOrm } from "../../infra/typeorm/CodeRepositoryOrm";
import { Code } from "../entities/Code";
import { CodeRepository } from "../repositories/CodeRepository";
import { ICodeRepository } from "../repositories/ICodeRepository";
import { CreateCodeUseCase } from "./CreateCodeUseCase/CreateCodeUseCase";
import { ListCodeUseCase } from "./ListCodeUseCase/ListCodeUseCase";


export class CodeUseCaseFactory implements IAbstractUseCaseFactory<Code> {
    constructor(private _postRepostiry: IPostRepository,
        private _useRepository: IUserRepository,
        private _codeRepository: ICodeRepository) { }

    public getCreateUseCase(): IUseCase<Code> {
        return new CreateCodeUseCase(this._codeRepository, this._useRepository, this._postRepostiry);
    }

    public getIndexUseCase(): IUseCase<Code> {
        return new ListCodeUseCase(this._codeRepository);
    }

    public getDeleteUseCase(): IUseCase<Code> {
        throw new Error('Not implements');
    }

    public getUpdateUseCase(): IUseCase<Code> {
        throw new Error('Not implements');
    }
}

const codeRepository = new CodeRepository(codeRepositoryOrm);
const codeUseCaseFactory = new CodeUseCaseFactory(
    postRepository,
    userRepository,
    codeRepository
);

export { codeUseCaseFactory };
