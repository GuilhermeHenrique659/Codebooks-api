import { Code } from "../entities/Code";

export interface ICodeRepository {
    store(code: Code): Promise<void>;
    findAllByPost(id: string): Promise<Code[]>
}