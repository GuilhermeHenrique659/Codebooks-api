import { Post } from "../../entities/Post";
import { IPostRepository } from "../IPostRepository";



export class MockPostRepository implements IPostRepository {
    private postdb: Post[] = []


    public async store(post: Post): Promise<void> {
        this.postdb.push(post);
    }

    public async findAll(): Promise<Post[]> {
        return this.postdb;
    }
}