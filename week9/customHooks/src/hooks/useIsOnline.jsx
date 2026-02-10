import { useEffect } from "react";
import { useState } from "react";


function useIsOnline(n){
  const[online,setOnline]=useState(window.navigator.onLine);

  useEffect(()=>{
    const handleOnline=()=>{
      setOnline(true);
    }
    const handleOffline=()=>{
      setOnline(false);
    }

    window.addEventListener("online",handleOnline);
    window.addEventListener("offline",handleOffline);

    return(()=>{
      window.removeEventListener("online",handleOnline);
      window.removeEventListener("offline",handleOffline);
    })
},[])
  return online
};

function App(){
  const isOnline = useIsOnline();
  return <>
    <div>
        {isOnline?"Online...":"You are offline,please connect to the internet"}
    </div>
  </>
}

export default App;

