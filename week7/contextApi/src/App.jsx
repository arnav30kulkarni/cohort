
import { useState } from 'react'
import './App.css'
import { set } from 'mongoose';

function App() {
  const [count,setCount]=useState(0);
  return (
    <>
   <Button count = {count} setCount = {setCount} />
   <Count count = {count}/>
   </>
  )
}


function Count({count}){
 return(
  <>
  the count is {count}
  </>
 )
}
function Button({count,setCount}){
  return( <div>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>increase count</button>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>decrease count</button>
  </div>)
}

export default App