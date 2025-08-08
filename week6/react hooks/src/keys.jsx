import { useState } from 'react'
import './App.css'
import {memo} from 'react'

let counter=4;

function App() {
    const [Todos,setTodos] = useState([{
        id:1,
        title:"go gym",
        description:"5-6"
    },{
        id:2,
        title:"dinner",
        description:"8-9"
    },{
        id:3,
        title:"sleep",
        description:"12 onwards"
    }])

    function AddTodo(){
        setTodos([...Todos,{
            id:counter++,
            title: Math.random(),
            description: Math.random()
        }]) 
    }
  return <div>
    <button onClick={AddTodo}>add a Todo</button>
    {Todos.map(item => {
        return <Todo key={item.id} title = {item.title} description = {item.description}/>
    })}
    </div>
}

function Todo({id,title,description}){
    return <div> 
        <h1>
            {id}
        </h1>
        <h1>
            {title}
        </h1> 
        <h1>
            {description}
        </h1>
    </div>
}
export default App
 
// a wrapper is a sort of card(component) which takes another component as an input
