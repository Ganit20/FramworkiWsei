
import { GET_WORKSPACES_UPDATES, IWorkTypes } from "../Actions/ActionTypes";
import {IWorkspacesUpdate} from "../Model/IWorkspacesUpdate";

export interface IWorkspacesUpdatesReducer {
    workspacesUpdates: IWorkspacesUpdate[] | null;
}

const defaultState = (): IWorkspacesUpdatesReducer => ({
    workspacesUpdates: null,
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case GET_WORKSPACES_UPDATES: {
            const data: IWorkTypes['GET_WORKSPACES_UPDATES'] = action;
            return {
                ...state,
                workspacesUpdates: data.workspacesUpdates
            }
        }

        default: {
            return state;
        }
    }
}

