import { Code } from "../../entities/Code";
import { ICodeRepository } from "../ICodeRepository";

export class MockCodeRepository implements ICodeRepository {
    private codesdb: Code[] = []

    public async store(code: Code): Promise<void> {
        this.codesdb.push(code);
    }

    public async findAllByPost(id: string): Promise<Code[]> {
        return this.codesdb;
    }
}