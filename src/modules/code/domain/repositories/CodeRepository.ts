import { Repository } from "typeorm";
import { Code } from "../entities/Code";
import { ICodeRepository } from "./ICodeRepository";


export class CodeRepository implements ICodeRepository {
    constructor(private _ormRepository: Repository<Code>) { }

    public async store(code: Code): Promise<void> {
        await this._ormRepository.save(code);
    }

    public async findAllByPost(id: string): Promise<Code[]> {
        return this._ormRepository.find({
            where: {
                id: id
            },
            relations: {
                user: true
            }
        });
    }
} 