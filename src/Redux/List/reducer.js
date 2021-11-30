import {ADD_ITEM} from "./constants";

export const listReducer=(initialState= [], action)=>{
    switch (action.type) {
        case ADD_ITEM:return [action.payload,...initialState]

        default :return initialState
    }

}