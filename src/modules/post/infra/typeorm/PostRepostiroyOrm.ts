import { connection } from "../../../../shared/infra/typeorm";
import { PostEntitySchema } from "./entites/PostSchema";


export const postRepositoryOrm = connection.getRepository(PostEntitySchema);