import {
    ContactsAction,
    GET_CAFE,
    GET_CAFE_ERROR,
    GET_CAFE_LIST,
    GET_CAFE_LIST_ERROR,
    START_EDIT_FETCHING,
    START_FETCHING,
    DELETE_CAFE, DELETE_CAFE_ERROR
} from "./reducer";
import {Restaurant} from "../../models";

export const getCafeListSuccess = (list: Restaurant[]): ContactsAction => ({
    type: GET_CAFE_LIST,
    payload: {
        list
    }
});

export const getCafeListError = (message: string): ContactsAction => ({
    type: GET_CAFE_LIST_ERROR,
    payload: {
        message
    }
});

export const  startFetching = (): ContactsAction => ({
    type: START_FETCHING
});

export const getCafeSuccess = (restaurant: Restaurant): ContactsAction => ({
    type: GET_CAFE,
    payload: {
        restaurant
    }
});

export const getCafeError = (message: string): ContactsAction => ({
    type: GET_CAFE_ERROR,
    payload: {
        message
    }
});

export const  startEditFetching = (): ContactsAction => ({
    type: START_EDIT_FETCHING
});

export const deleteCafeSuccess = (id: number): ContactsAction => ({
    type: DELETE_CAFE,
    id: id
})

export const DeleteCafeError = (message: string): ContactsAction => ({
    type: DELETE_CAFE_ERROR,
    payload: {
        message
    }
})

