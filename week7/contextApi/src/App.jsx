
import { createContext, useContext, useState } from 'react'
import './App.css'
import CountContext from './Context';

function App() {
  const [count,setCount]=useState(0);

  // wrap anyone that wants to use teleoprted value inside a provider

  return (
    <>
    <CountContext.Provider value={count}>
    <Count setCount={setCount} />
    </CountContext.Provider>
   </>
  )
}


function Count({setCount}){
 return(
  <>
  <CountRender/>
  <Button setCount={setCount}/>
  </>
 )
}

function CountRender(){
  const count = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Button({setCount}){
  const count = useContext(CountContext)
  return( <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>increase count</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>decrease count</button>
  </div>)
}

export default App