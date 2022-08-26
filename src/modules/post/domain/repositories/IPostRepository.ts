import { Post } from "../entities/Post";


export interface IPostRepository {
    store(post: Post): Promise<void>;
    findAll(): Promise<Post[]>;
}