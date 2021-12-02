import React from 'react';
import {useSelector} from "react-redux";
import Counter from "../Components/Counter";
import ToDoListClassComponent from "../Components/ToDoListClassComponent";
import {useNavigate} from "react-router";

function Home() {
    const navigate=useNavigate()

    const {counter,
        list:{
            /** We took the list from listObject*/
            list, isLoading, error
        }}=useSelector(state=>state)

    return (
        <>

            <Counter/>
            Counter in App js{counter}
            {/** Functional component with redux*/}
            {/*<ToDoList/>*/}

            {/** Class component with redux*/}
            <ToDoListClassComponent/>
            {error?
                <div>{error}</div>
                :
                <>
                    {isLoading ?
                        <span>Loading...</span> :
                        list.map(item =>
                            <div

                                className={'item'} key={item.id}
                                 onClick={()=>navigate(`/${item.id}`)}>
                                {item.title}
                            </div
                                >)
                    }

                </>
            }

        </>
    );
}

export default Home;