import { Restaurant } from '../../models';
import { Action } from 'redux';


export const GET_CAFE_LIST = 'GET_CAFE_LIST';
export const GET_CAFE_LIST_ERROR = 'GET_CAFE_LIST_ERROR';
export const START_FETCHING = 'START_FETCHING';

export interface ContactState {
    restaurants?: Restaurant[]
    isFetching: boolean
    error?: string
}

interface GetCafeListSuccessAction extends Action {
    type: typeof GET_CAFE_LIST
    payload: {
        list: Restaurant[]
    }
}

interface GetCafeListErrorAction extends Action  {
    type: typeof GET_CAFE_LIST_ERROR
    payload: {
        message: string
    }
}

interface StartFetchingAction extends Action {
    type: typeof START_FETCHING
}

export type ContactsAction = GetCafeListSuccessAction | GetCafeListErrorAction | StartFetchingAction

let initialState: ContactState = {
    isFetching: false
}

const contactsReducer = (state = initialState, action: ContactsAction ): ContactState => {
    switch (action.type) {
        case "GET_CAFE_LIST":
            return {
                isFetching: false,
                restaurants: action.payload.list
            };
        case "GET_CAFE_LIST_ERROR":
            return  {
                isFetching: false,
                error: action.payload.message
            };
        case "START_FETCHING":
            return {
                isFetching: true
            };
        default:
            return  state;
    }
}

export default contactsReducer;