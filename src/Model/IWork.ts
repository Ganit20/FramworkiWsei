import { ISingleUser } from "./ISingleUser";

export interface IWork {
    id: number;
    postId: number;
    author: ISingleUser;
    name: string;
    email: string;
    body: string;
    followed: boolean;
}
