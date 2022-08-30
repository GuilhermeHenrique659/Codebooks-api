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

    public async findById(id: string): Promise<Post | null> {
        try {
            const post = this.postdb.find((post) => post.id === id)

            if (post === undefined) return null
            return post;
        } catch {
            return null
        }
    }
}