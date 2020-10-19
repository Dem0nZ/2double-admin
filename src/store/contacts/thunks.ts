import {ContactsAction} from "./reducer";
import {Dispatch} from "react";
import {contactsAPI} from "../../api/api";
import {getCafeListError, getCafeListSuccess, startFetching} from "./actions";


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