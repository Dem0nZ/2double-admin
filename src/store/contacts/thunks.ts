import {ContactsAction} from "./reducer";
import {Dispatch} from "react";
import {contactsAPI} from "../../api/api";
import {
    createNewCafeSuccess,
    deleteCafeError,
    deleteCafeSuccess, editCafeError, editCafeSuccess,
    getCafeError,
    getCafeListError,
    getCafeListSuccess,
    getCafeSuccess,
    startEditFetching,
    startFetching
} from "./actions";
import {RestaurantData, Restaurant} from "../../models";


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
            return dispatch(deleteCafeError(message));
        }
    }
}

export  const createCafe = (newRestaurant: RestaurantData) => {
    return async (dispatch: Dispatch<ContactsAction>) => {
        try {
            const response = await contactsAPI.createCafe(newRestaurant);
            return dispatch(createNewCafeSuccess(response.data));
        }
        catch (error) {
            const message = error.response?.data?.message || 'API unavailable';
            return dispatch(getCafeError(message));
        }
    }
}

export  const editCafe = (id: number, restaurant: RestaurantData) => {
    return async (dispatch: Dispatch<ContactsAction>) => {
        try {
            const response = await contactsAPI.editCafe(id, restaurant);
            return dispatch(editCafeSuccess(response.data));
        }
        catch (error) {
            const message = error.response?.data?.message || 'API unavailable';
            return dispatch(editCafeError(message));
        }
    }
}

