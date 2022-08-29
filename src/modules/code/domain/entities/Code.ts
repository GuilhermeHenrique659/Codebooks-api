import { v4 as uuid_v4 } from "uuid";
import { Post } from "../../../post/domain/entities/Post";
import { User } from "../../../users/domain/entities/User";


export class Code {
    public readonly id: string;

    public code: string;

    public language: string;

    public user_id: string;

    public user: User;

    public post: Post

    public post_id: string;

    public created_at: Date;

    public updated_at: Date;

    constructor(props: Omit<Code, 'id' | 'created_at' | 'updated_at' | 'user' | 'post'>,
        id?: string) {
        Object.assign(this, props);

        if (!id)
            this.id = uuid_v4();
    }
}