import { Restaurant } from '../../models';
import { Action } from 'redux';


export const GET_CAFE_LIST = 'GET_CAFE_LIST';
export const GET_CAFE_LIST_ERROR = 'GET_CAFE_LIST_ERROR';
export const START_FETCHING = 'START_FETCHING';
export const GET_CAFE = 'GET_CAFE';
export const GET_CAFE_ERROR = 'GET_CAFE_ERROR';
export const START_EDIT_FETCHING = 'START_EDIT_FETCHING';
export const  DELETE_CAFE = 'DELETE_CAFE';
export const DELETE_CAFE_ERROR = 'DELETE_CAFE_ERROR';
export const GET_NEW_CAFE = 'GET_NEW_CAFE';

export interface ContactState {
    restaurants?: Restaurant[]
    isFetching: boolean
    error?: string
    edit?: {
        isFetching: boolean
        restaurant?: Restaurant
    }
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

interface GetCafeSuccessAction extends Action {
    type: typeof GET_CAFE
    payload: {
        restaurant: Restaurant
    }
}
interface GetNewCafeAction extends Action {
    type: typeof GET_NEW_CAFE
    payload: {
    }
}
interface GetCafeErrorAction extends Action  {
    type: typeof GET_CAFE_ERROR
    payload: {
        message: string
    }
}
interface StartEditFetchingAction extends Action {
    type: typeof START_EDIT_FETCHING
}

interface DeleteCafe extends Action {
    type: typeof DELETE_CAFE
    id: number
}

interface DeleteCafeError extends Action {
    type: typeof DELETE_CAFE_ERROR
    payload: {
        message: string
    }
}

export type ContactsAction = GetCafeListSuccessAction | GetCafeListErrorAction | StartFetchingAction |
    GetCafeSuccessAction | GetCafeErrorAction | StartEditFetchingAction | DeleteCafe | DeleteCafeError | GetNewCafeAction

let initialState: ContactState = {
    isFetching: false,
    edit: {
        isFetching: false
    }
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
        case "GET_CAFE":
            return {
                ...state,
                edit: {
                    isFetching: false,
                    ...action.payload
                }
            };
        case "GET_NEW_CAFE":
            return {
                ...state,
                edit: {
                    isFetching: false
                }
            };
        case "GET_CAFE_ERROR":
            return  {
                isFetching: false,
                error: action.payload.message
            };
        case "START_EDIT_FETCHING":
            return {
                ...state,
                edit:{
                    isFetching: true,
                }
            };
        case "DELETE_CAFE":
            return {
                ...state,
                restaurants: state.restaurants?.filter(res => res.id != action.id)
            }
        // case "DELETE_CAFE_ERROR":
        //     return {
        //     error: action.payload.message
        //     };
        default:
            return state;
    }
}

export default contactsReducer;