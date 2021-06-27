import { GET_CURRENT_USER, GET_USERS, IUserTypes, SET_DATA } from '../Actions/ActionTypes';
import {ISingleUser} from '../Model/ISingleUser';

export interface IUsersReducer {
    usersList: ISingleUser[];
    currentUser: ISingleUser | null;
    someData: string;
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    currentUser: null,
    someData: '.'
});

export default (state = defaultState(), action: any) => {
    switch(action.type){

        case GET_USERS: {
            const data: IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: data.usersList
            } 
        } 

        case GET_CURRENT_USER: {
            const data: IUserTypes['GET_CURRENT_USER'] = action;
            return {
                ...state,
                currentUser: data.user
            }
        }

        case SET_DATA: {
            const data: IUserTypes['SET_DATA'] = action;
            return{
                ...state,
                someData: data.someData
            }
        }
        default: {
            return state
        }
    }
}

