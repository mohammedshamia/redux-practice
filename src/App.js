import './App.css';
import Counter from "./Components/Counter";
import {useSelector} from "react-redux";
import ToDoList from "./Components/ToDoList";

function App() {
    const {counter,list}=useSelector(state=>state)
  return (
    <div className="App">
            <Counter/>
        Counter in App js{counter}
        <ToDoList/>

        {list.map(item=><div key={item.id}>{item.value}</div>)}
    </div>
  );
}

export default App;
