import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../Redux/Counter/actions'

function Counter(){
    /** State here equals the store*/
    const {counter}=useSelector(state=>state)
    const dispatch=useDispatch()
    console.log(counter)

    return (
        <>
            <button
                onClick={
                ()=>dispatch(Actions.incrementAction(4))
            }>Increment</button>

            <button
                onClick={
                    ()=>dispatch(Actions.decrementAction(2))
                }
            >Decrement</button>
            <div>{counter}</div>
        </>
    );
}

export default Counter;