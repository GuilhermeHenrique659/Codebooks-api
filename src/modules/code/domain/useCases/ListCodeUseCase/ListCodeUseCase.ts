import { Code } from "../../entities/Code";
import { ICodeRepository } from "../../repositories/ICodeRepository";
import { IListCodeUseCaseDTO } from "./ListCodeUseCaseDTO";



export class ListCodeUseCase {
    constructor(private _codeRepository: ICodeRepository) { }

    public async execute({ post_id }: IListCodeUseCaseDTO): Promise<Code[]> {
        return this._codeRepository.findAllByPost(post_id);
    }
}