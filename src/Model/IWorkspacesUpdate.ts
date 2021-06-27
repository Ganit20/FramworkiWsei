import { ISingleUser } from "./ISingleUser";

export interface IWorkspacesUpdate {
    id: number;
    postId: number;
    author: ISingleUser;
    name: string;
    body: string;
    type: string;
    followed: boolean;
}
