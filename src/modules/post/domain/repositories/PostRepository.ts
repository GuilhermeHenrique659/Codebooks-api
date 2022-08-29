import { Repository } from "typeorm";
import { PostEntitySchema } from "../../infra/typeorm/entites/PostSchema";
import { Post } from "../entities/Post";
import { IPostRepository } from "./IPostRepository";


export class PostRepository implements IPostRepository {
    constructor(private ormRepository: Repository<Post>) { }

    public async store(post: Post): Promise<void> {
        console.log(PostEntitySchema.options.columns)

        await this.ormRepository.save(post)

    }

    public async findAll(): Promise<Post[]> {
        return this.ormRepository.find({
            relations: {
                user: true
            }
        });
    }
}