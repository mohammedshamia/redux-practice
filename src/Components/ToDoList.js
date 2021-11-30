import  {useState} from 'react';
import * as Actions from "../Redux/Counter/actions";
import {useDispatch} from "react-redux";
import {addItemAction} from "../Redux/List/actions";

function ToDoList() {
    const dispatch=useDispatch()
    const [value, setValue]=useState('')

    const handleInputChange=e=>setValue(e.target.value)

    const handleAddItem=()=>{
        if (!value)
            return
        dispatch(addItemAction({
            value,
            id:Math.random()*1000
        }))
        setValue('')
    }

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