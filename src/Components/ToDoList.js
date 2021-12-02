import {useEffect, useState} from 'react';
import {addItemAction, getItems} from "../Redux/List/actions";
import {dispatch} from "../Redux/store";

function ToDoList() {
    const [value, setValue]=useState('')

    const handleInputChange=e=>setValue(e.target.value)

    const handleAddItem=()=>{
        if (!value)
            return
        dispatch(addItemAction({
            title:value,
            id:Math.random()*1000
        }))
        setValue('')
    }

    useEffect(()=>{
        dispatch(getItems())
    },[])

    return (
        <div style={{marginTop:40}}>

            <input type={'text'}
                   onChange={handleInputChange}
                   value={value}
            />

            <button
                onClick={handleAddItem}
            >Add Item</button>
        </div>
    );
}

export default ToDoList;