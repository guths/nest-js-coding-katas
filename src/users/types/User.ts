import { Exclude } from "class-transformer";

export class User {
    id: number;
    username: string;
    password: string;
}

export class SerializedUser {
    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
    }

    username: string;

    id: number;

    @Exclude()
    password: string;
}