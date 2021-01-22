import {Category} from "../../models";
import {DELETE_CATEGORY, GET_CATEGORIES, GET_CATEGORIES_ERROR, MenuAction, START_FETCHING} from "./reducer";


export const getCategoriesSuccess = (list: Category[]): MenuAction => ({
    type: GET_CATEGORIES,
    payload: {
        list
    }
})

export const getCategoriesError = (message: string): MenuAction => ({
    type: GET_CATEGORIES_ERROR,
    payload: {
        message
    }
})

export const  startFetching = (): MenuAction => ({
    type: START_FETCHING
});

export const deleteCategorySuccess = (id: number): MenuAction => ({
    type: DELETE_CATEGORY,
    id: id
})
