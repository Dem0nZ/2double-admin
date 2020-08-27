import {ContactsAction} from "./reducer";
import {Dispatch} from "react";
import {contactsAPI} from "../../api/api";
import {getCafeListError, getCafeListSuccess} from "./actions";


export  const getCafeList = () => {
    return async (dispatch: Dispatch<ContactsAction>) => {
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