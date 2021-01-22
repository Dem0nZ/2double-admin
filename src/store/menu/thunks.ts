import {Dispatch} from "react";
import {menuCategoriesAPI} from "../../api/api";
import {MenuAction} from "./reducer";
import {deleteCategorySuccess, getCategoriesError, getCategoriesSuccess, startFetching} from "./actions";


export  const getCategoriesList = () => {
    return async (dispatch: Dispatch<MenuAction>) => {
        dispatch(startFetching());
        try {
            const response = await menuCategoriesAPI.getCategories();
            return dispatch(getCategoriesSuccess(response.data));
        }
        catch (error) {
            const message = error.response?.data?.message || 'API unavailable';
            return dispatch(getCategoriesError(message));
        }
    }
}
export const deleteCategory = (id:number) => {
    return async (dispatch: Dispatch<MenuAction>) => {
        await menuCategoriesAPI.deleteCategory(id);
        return dispatch(deleteCategorySuccess(id));
    }
}