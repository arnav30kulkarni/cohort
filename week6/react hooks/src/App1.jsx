import { useState } from 'react'
import './App.css'

// function Header({name,age}){
//   return <div>
//     name is {name} and age is {age}
//   </div>
// }

function Header({pname}) {
  return <>
  <div>my name is {pname}</div>
  </>
}


function App() {
  return <>
      <Header pname = {"tanmay"}/>
      <ChangingHeader></ChangingHeader>
    </>
}

function ChangingHeader(){
const [name, setName] = useState("arnav");
  return (
    <>
      <button onClick={() => {
        setName(Math.random)
      }}>Click to change name</button>
      <Header pname = {name}/>
      </>)
}
export default App
