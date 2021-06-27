import {IPublication} from "../Model/IPublication";
import { ISingleUser } from "../Model/ISingleUser";
import { IWork } from "../Model/IWork";
import { IWorkspacesUpdate } from "../Model/IWorkspacesUpdate";

export const GET_LATEST_PUBLICATIONS = 'GET_LATEST_PUBLICATIONS';
export const GET_USERS = 'GET_USERS';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SET_DATA = 'SET_DATA';
export const GET_WORKSPACES_UPDATES = 'GET_WORKSPACES_UPDATES';
export const GET_YOUR_WORKS = 'GET_YOUR_WORK';

export interface IPublicationTypes {
    GET_LATEST_PUBLICATIONS: {
        latestPublications: IPublication[]
    }
}
export interface IUserTypes { 
    GET_USERS: {
        usersList: ISingleUser[];
    };

    GET_CURRENT_USER: {
        user: ISingleUser;
    };

    SET_DATA: {
        someData: string;
    };
}   
export interface IWorkTypes {
    GET_WORKSPACES_UPDATES: {
        workspacesUpdates: IWorkspacesUpdate[]
    }
}
export interface IWorkTypes {
    GET_YOUR_WORKS: {
        works: IWork[]
    }
}