import { IPostRepository } from "../../../post/domain/repositories/IPostRepository";
import { postRepository } from "../../../post/domain/useCases/PostUseCaseFactory";
import { IUserRepository } from "../../../users/domain/repositories/IUserRepository";
import { userRepository } from "../../../users/domain/useCases";
import { codeRepositoryOrm } from "../../infra/typeorm/CodeRepositoryOrm";
import { CodeRepository } from "../repositories/CodeRepository";
import { ICodeRepository } from "../repositories/ICodeRepository";
import { CreateCodeUseCase } from "./CreateCodeUseCase/CreateCodeUseCase";
import { ListCodeUseCase } from "./ListCodeUseCase/ListCodeUseCase";


export class CodeUseCaseFactory {
    constructor(private _postRepostiry: IPostRepository,
        private _useRepository: IUserRepository,
        private _codeRepository: ICodeRepository) { }

    public GetCreateCodeUseCase(): CreateCodeUseCase {
        return new CreateCodeUseCase(this._codeRepository, this._useRepository, this._postRepostiry);
    }

    public GetListCodeUseCase(): ListCodeUseCase {
        return new ListCodeUseCase(this._codeRepository);
    }
}

const codeRepository = new CodeRepository(codeRepositoryOrm);
const codeUseCaseFactory = new CodeUseCaseFactory(
    postRepository,
    userRepository,
    codeRepository
);

export { codeUseCaseFactory };
