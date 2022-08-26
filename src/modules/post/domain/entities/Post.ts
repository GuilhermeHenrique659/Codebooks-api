import { uuid } from "uuidv4";


export class Post {

    public readonly id: string;

    public title: string;

    public description: string;

    public like: string;

    public user_id: string;

    public created_at?: Date;

    public updated_at?: Date;

    constructor(props: Omit<Post, 'id' | 'created_at' | 'updated_at'>,
        id?: string, created_at?: Date, updated_at?: Date
    ) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}