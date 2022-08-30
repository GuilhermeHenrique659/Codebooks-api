import { IRepositoryAdapter } from "../../../../shared/infra/adapter/repositories/IRepositoryAdapter";
import { Post } from "../entities/Post";
import { IPostRepository } from "./IPostRepository";


export class PostRepository implements IPostRepository {
    constructor(private ormRepository: IRepositoryAdapter<Post>) { }

    public async store(post: Post): Promise<void> {

        await this.ormRepository.save(post)

    }

    public async findAll(): Promise<Post[]> {
        return this.ormRepository.find({
            relations: {
                users: true
            },
            order: {
                created_at: 'DESC'
            }
        });

    }

    public async findById(id: string): Promise<Post | null> {
        return this.ormRepository.findOne({
            where: {
                id: id
            }
        });
    }
}