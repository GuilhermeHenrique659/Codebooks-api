import { uuid } from "uuidv4";
import { Post } from "../../../post/domain/entities/Post";
import { IUser } from "./IUser";

export class User implements IUser {
    public readonly id: string;

    public name: string;

    public email: string;

    public password: string;

    public posts: Post[];

    constructor(props: Omit<User, 'id' | 'posts'>, id?: string) {
        Object.assign(this, props);

        if (!id)
            this.id = uuid();
    }
}