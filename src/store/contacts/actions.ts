import {ContactsAction, GET_CAFE_LIST, GET_CAFE_LIST_ERROR, START_FETCHING} from "./reducer";
import {Restaurant} from "../../models";

export const getCafeListSuccess = (list: Restaurant[]): ContactsAction => ({
    type: GET_CAFE_LIST,
    payload: {
        list
    }
});

export const getCafeListError = (message: string):ContactsAction => ({
    type: GET_CAFE_LIST_ERROR,
    payload: {
        message
    }
});

export const  startFetching = () => ({
    type: START_FETCHING
});
