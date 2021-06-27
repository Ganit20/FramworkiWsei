
import { GET_YOUR_WORKS, IWorkTypes } from '../Actions/ActionTypes';
import { IWork } from '../Model/IWork';

export interface IWorksReducer {
    works: IWork[] | null;
}

const defaultState = (): IWorksReducer => ({
    works: null,
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case GET_YOUR_WORKS: {
            const data: IWorkTypes['GET_YOUR_WORKS'] = action;
            return {
                ...state,
                works: data.works
            }
        }

        default: {
            return state;
        }
    }
}

