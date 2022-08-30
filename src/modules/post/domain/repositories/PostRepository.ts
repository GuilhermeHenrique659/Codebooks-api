import { Repository } from "typeorm";
import { Post } from "../entities/Post";
import { IPostRepository } from "./IPostRepository";


export class PostRepository implements IPostRepository {
    constructor(private ormRepository: Repository<Post>) { }

    public async store(post: Post): Promise<void> {

        await this.ormRepository.save(post)

    }

    public async findAll(): Promise<Post[]> {
        const post = await this.ormRepository.find({
            relations: {
                users: true
            }
        });

        console.log(post);

        return post
    }

    public async findById(id: string): Promise<Post | null> {
        return this.ormRepository.findOne({
            where: {
                id: id
            }
        });
    }
}