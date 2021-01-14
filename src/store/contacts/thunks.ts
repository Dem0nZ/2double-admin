import {ContactsAction} from "./reducer";
import {Dispatch} from "react";
import {contactsAPI} from "../../api/api";
import {
    deleteCafeSuccess,
    getCafeError,
    getCafeListError,
    getCafeListSuccess,
    getCafeSuccess,
    startEditFetching,
    startFetching
} from "./actions";


export  const getCafeList = () => {
    return async (dispatch: Dispatch<ContactsAction>) => {
        dispatch(startFetching());
        try {
            const response = await contactsAPI.getCafeList();
            return dispatch(getCafeListSuccess(response.data));
        }
        catch (error) {
            const message = error.response?.data?.message || 'API unavailable';
            return dispatch(getCafeListError(message));
        }
    }
}

export  const getCafe = (id: number) => {
    return async (dispatch: Dispatch<ContactsAction>) => {
        dispatch(startEditFetching());
        try {
            const response = await contactsAPI.getCafe(id);
            return dispatch(getCafeSuccess(response.data));
        }
        catch (error) {
            const message = error.response?.data?.message || 'API unavailable';
            return dispatch(getCafeError(message));
        }
    }
}

export  const deleteCafe = (id: number) => {
    return async (dispatch: Dispatch<ContactsAction>) => {
        try {
            await contactsAPI.deleteCafe(id);
            return dispatch(deleteCafeSuccess(id));
        }
        catch (error) {
            const message = error.response?.data?.message || 'API unavailable';
            return dispatch(getCafeError(message));
        }
    }
}