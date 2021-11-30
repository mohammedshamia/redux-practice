import {combineReducers, createStore} from "redux";
import {counterReducer} from "./Counter/reducer";
import {listReducer} from "./List/reducer";

const reducers=combineReducers({
    counter:counterReducer,
    list:listReducer,
})

const initialState={
    list:localStorage.getItem('list')?
        JSON.parse(localStorage.getItem('list')):
        [],
}


export const store=createStore(
    reducers,
    initialState,
    window.devToolsExtension && window.devToolsExtension())