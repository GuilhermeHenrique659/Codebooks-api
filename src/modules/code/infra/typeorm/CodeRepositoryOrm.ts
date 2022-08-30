import { connection } from "../../../../shared/infra/typeorm";
import { Code } from "../../domain/entities/Code";
import { CodeEntitySchema } from "./entities/CodeSchema";


export const codeRepositoryOrm = connection.getRepository<Code>(CodeEntitySchema)