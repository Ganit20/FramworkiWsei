
import { GET_LATEST_PUBLICATIONS, IPublicationTypes } from "../Actions/ActionTypes";
import { IPublication } from "../Model/IPublication";

export interface IPublicationsReducer {
    latestPublications: IPublication[];
}

const defaultState = (): IPublicationsReducer => ({
    latestPublications: []
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case GET_LATEST_PUBLICATIONS: {
            const data: IPublicationTypes['GET_LATEST_PUBLICATIONS'] = action;
            return {
                ...state,
                latestPublications: data.latestPublications
            }
        }
        default: {
            return state;
        }
    }
}
