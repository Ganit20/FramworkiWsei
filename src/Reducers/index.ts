import {combineReducers } from 'redux';

import users, { IUsersReducer } from "./UsersReducer";
import works, { IWorksReducer } from "./WorksReducer";
import publications, { IPublicationsReducer } from "./PublicationsReducer";
import workspacesUpdates, {IWorkspacesUpdatesReducer} from "./WorkspacesUpdatesReducer";

export interface IState{
    users: IUsersReducer;
    works: IWorksReducer;
    publications: IPublicationsReducer;
    workspacesUpdates: IWorkspacesUpdatesReducer;
}

export default combineReducers({
    users,
    works,
    publications,
    workspacesUpdates
})

