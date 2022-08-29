import AppError from "../../../../../shared/errors/AppError";
import { IPostRepository } from "../../../../post/domain/repositories/IPostRepository";
import { IUserRepository } from "../../../../users/domain/repositories/IUserRepository";
import { Code } from "../../entities/Code";
import { ICodeRepository } from "../../repositories/ICodeRepository";
import { ICreateCodeUseCaseDTO } from "./CreateCodeUseCaseDTO";


export class CreateCodeUseCase {
    constructor(private _codeRepository: ICodeRepository,
        private _userRepository: IUserRepository,
        private _postRepository: IPostRepository) { }

    public async execute(data: ICreateCodeUseCaseDTO): Promise<Code> {
        const user = await this._userRepository.findById(data.user_id);

        if (!user) throw new AppError('User not found.');

        const post = await this._postRepository.findById(data.post_id);

        if (!post) throw new AppError('Post not found.');

        const code = new Code(data);

        await this._codeRepository.store(code);

        return code;
    }
}