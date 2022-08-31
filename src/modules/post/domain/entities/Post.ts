import { v4 as uuid_v4 } from "uuid";
import { User } from "../../../users/domain/entities/User";


export class Post {

    public readonly id: string;

    public title: string;

    public description: string;

    public like: number;

    public users: User;

    public user_id: string;

    public created_at?: Date;

    public updated_at?: Date;

    constructor(props: Omit<Post, 'id' | 'created_at' | 'updated_at' | 'users'>,
        id?: string
    ) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid_v4();
        }
    }
}