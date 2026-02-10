import { useEffect, useState } from "react";

function useInterval(fn,timeout){
useEffect(()=>{
 const value = setInterval(()=>{
  fn()
 },timeout)
 return(()=>{
  clearInterval(value);
 })
},[fn,timeout])
}

function App() {
  const[count,setCount]=useState(0);
  
  useInterval(()=>{
    setCount(c=>c+1)
  },1000)
  return (
    <div>
      timer is {count}s.
    </div>
  );
}

export default App;
