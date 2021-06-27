import {IPhoto} from "../Model/IPhoto";
import { Dispatch } from 'redux';
import { ISingleUser } from '../Model/ISingleUser';
import { IWork } from "../Model/IWork";
import store from "../Utility/Store";
import { IWorkspacesUpdate } from "../Model/IWorkspacesUpdate";
import _ from "lodash";
import { IPublication } from "../Model/IPublication";
import { GET_CURRENT_USER, GET_LATEST_PUBLICATIONS, GET_USERS, GET_WORKSPACES_UPDATES, GET_YOUR_WORKS, SET_DATA } from "../Actions/ActionTypes";
const ApiUrl = 'https://jsonplaceholder.typicode.com'

export const getPhoto = (id: number): Promise<IPhoto> => {
    return fetch(`${ApiUrl}/photos/${id}`)
        .then(response => response.json() as Promise<IPhoto>)
}


export const getUser = (id: number): Promise<ISingleUser> => {
    return fetch(`${ApiUrl}/users/${id}`)
    .then(response => response.json() as Promise<ISingleUser>);
};

export const getUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {
    return fetch(`${ApiUrl}/users`)
        .then(response => response.json())
        .then(async (usersList: ISingleUser[]) => {
            for (const user of usersList) {
                const userPhoto = await getPhoto(user.id);
                user.photo = {
                    fullUrl: userPhoto.url,
                    thumbnailUrl: userPhoto.thumbnailUrl
                }};
            
            dispatch({
                type: GET_USERS,
                usersList
            })
        })
}) as any;

export const getCurrentUser = (): Promise<ISingleUser> => ((dispatch: Dispatch) => {
    return fetch(`${ApiUrl}/users/9`)
        .then(response => response.json())
        .then(async (user: ISingleUser) => {
            const userPhoto = await getPhoto(user.id);
            user.photo = {
                fullUrl: userPhoto.url,
                thumbnailUrl: userPhoto.thumbnailUrl
            };
            dispatch({
                type: GET_CURRENT_USER,
                user
            })
        });
}) as any;


export const getSomeData = (someData: string): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {
    dispatch({
        type: SET_DATA,
        someData
    })
}) as any;

export const getWorks = (): Promise<IWork[]> => ((dispatch: Dispatch) => {
    return fetch(`${ApiUrl}/comments`)
        .then(response => response.json())
        .then(async (works: IWork[]) => {
            for (const work of works) {
                const userId = Math.floor(Math.random() * 10) + 1;
                const users = store.getState().users.usersList;
                const followed = userId % 2 == 0;

                work.author = users[userId];
                work.followed = followed;
            }

            dispatch({
                type: GET_YOUR_WORKS,
                works
            })
        });
}) as any;

export const getWorkspacesUpdates = (): Promise<IWorkspacesUpdate[]> => ((dispatch: Dispatch) => {
    return fetch(`${ApiUrl}/comments`)
        .then(response => response.json())
        .then(async (workspacesUpdates: IWorkspacesUpdate[]) => {
            for (const workspacesUpdate of workspacesUpdates) {
                const userId = Math.floor(Math.random() * 10) + 1;
                const users = store.getState().users.usersList;
                const followed = userId % 2 == 0;
                const type: string = _.sample(['SAS', 'SARL', 'Secondary business', 'Communities', 'POA', 'Survey']) ?? 'undefined';

                workspacesUpdate.author = users[userId];
                workspacesUpdate.followed = followed;
                workspacesUpdate.type = type;
            }

            dispatch({
                type: GET_WORKSPACES_UPDATES,
                workspacesUpdates
            })
        });
}) as any;
export const getPublications = (): Promise<IPublication[]> => ((dispatch: Dispatch) => {
    return fetch(`${ApiUrl}/posts`)
        .then(response => response.json() as Promise<IPublication[]>)
        .then(async (publications: IPublication[]) => {
            const latestPublications = _.takeRight<IPublication>(publications, 4);
            for (const publication of latestPublications) {
                const creationDate = new Date().toDateString();
                const userPhoto = await getPhoto(publication.userId);
                const user = await getUser(publication.userId);
                publication.thumbnailUrl = "./images/sign2.jpg";
                publication.creationDate = creationDate;
                publication.author = user;

                user.photo = {
                    fullUrl: userPhoto.url,
                    thumbnailUrl: userPhoto.thumbnailUrl
                };
            }

            dispatch({
                type: GET_LATEST_PUBLICATIONS,
                latestPublications
            });
        });
}) as any;