import { useState } from 'react'
import './App.css'
import {memo} from 'react'


const Header = memo(
    function Header({pname}) {
        return(
            <div>my name is {pname}</div>
        )
})

function App() {
    const [name, setName] = useState("arnav");
    function generateName(){
        setName(Math.random());
    }
  return <>
       <button onClick={generateName}>Click to change name</button>
      <Header pname = {name}/>
        <Header pname = {"tanmay"}/>
    </>
}

export default App
