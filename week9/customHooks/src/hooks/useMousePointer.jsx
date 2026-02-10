import { useEffect } from "react";
import { useState } from "react";

function useMousePointer(){
    const[position,setPosition]=useState({x:0,y:0});

    const handleMouseMovement=(e)=>{
        setPosition({x: e.clientX,y:clientY});
    }

    useEffect(()=>{
        window.addEventListener("moousemove",handleMouseMovement);
        return(()=>{
            window.removeEventListener("mousemove",handleMouseMovement);
        })
    },[])
    return position;
}

function App(){
  const mousePointer=useMousePointer()
  return <>
    <div>
        your mouse pointer is {mousePointer.x}{mousePointer.y}
    </div>
  </>
}

export default App;

