import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App () {
    const[todo,setTodo]=useState([]);
    const[currId,setCurrId] = useState()
    useEffect(()=>{
        axios.get("https://dummyjson.com/todos")
        .then(function(response){
            setTodo(response.data.todos)
        })
    },[currId])
    return(
        <div>
            <button onClick={()=> setCurrId(1)}>1</button>
            <button onClick={()=> setCurrId(2)}>2</button>
            <button onClick={()=> setCurrId(3)}>3</button>
            <button onClick={()=> setCurrId(4)}>4</button> 
            {/* for random number */}
            <button onClick={()=> setCurrId(Math.ciel(Math.random()*todo.length))}>random</button> 
            {/* {todo.map((todos)=>{
                if (todos.id ===1){x
                return( <Todo key={todos.id} todo={todos.todo} description=""></Todo>)}
            })} */}
            {
                todo.filter((t)=>t.id === currId)
                .map((t)=>
                <Todo key={t.id} todo={t.todo} description=""></Todo>)
            }
        </div>
    )
}

function Todo({id, todo, description}){
    return(
        <div>
        <h1>
            {todo}
        </h1>
        <h4>
            {description}
        </h4>
        </div>
    )
}

export default App;