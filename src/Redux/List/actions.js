import {ADD_ITEM} from "./constants";


export const addItemAction=(payload)=>{
    localStorage.setItem('list',
        localStorage.getItem('list')?
        JSON.stringify([payload,
            ...(JSON.parse(localStorage.getItem('list')))
        ]):
        JSON.stringify([payload]))

    return ({
        type:ADD_ITEM,
        payload
    })
}