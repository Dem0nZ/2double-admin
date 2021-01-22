import {Action} from 'redux';
import {Category} from "../../models";

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR';
export const START_FETCHING = 'START_FETCHING';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export interface MenuState {
    categories?: Category[]
    isFetching: boolean
    error?: string
}

interface GetCategoriesSuccessAction extends Action {
    type: typeof GET_CATEGORIES
    payload: {
        list: Category[]
    }
}

interface GetCategoriesErrorAction extends Action {
    type: typeof GET_CATEGORIES_ERROR
    payload: {
        message: string
    }
}

interface StartFetchingAction extends Action {
    type: typeof START_FETCHING
}

interface DeleteCategorySuccessAction extends Action {
    type: typeof DELETE_CATEGORY
    id: number
}

export type MenuAction = GetCategoriesSuccessAction
    | GetCategoriesErrorAction
    | StartFetchingAction
    | DeleteCategorySuccessAction


let initialState: MenuState = {
    isFetching: false
}

const menuReducer = (state = initialState, action: MenuAction): MenuState => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                isFetching: false,
                categories: action.payload.list
            };
        case GET_CATEGORIES_ERROR:
            return {
                isFetching: false,
                error: action.payload.message
            };
        case START_FETCHING:
            return {
                isFetching: true
            };
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories?.filter(category => category.id !== action.id)
            }
        default:
            return state;
    }
}

export default menuReducer;