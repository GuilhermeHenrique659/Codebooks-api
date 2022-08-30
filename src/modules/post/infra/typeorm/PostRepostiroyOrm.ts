import { connection } from "../../../../shared/infra/typeorm";
import { Post } from "../../domain/entities/Post";
import { PostEntitySchema } from "./entites/PostSchema";


export const postRepositoryOrm = connection.getRepository<Post>(PostEntitySchema);