import { useEffect, useState } from "react";
import axios from 'axios';

//customHook
function useQuotes(n){
  const[quotes,setQuotes]=useState([]);
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    const value = setInterval(()=>{
      axios.get("https://dummyjson.com/quotes")
        .then((res)=>{
          setQuotes(res.data.quotes);
          setLoading(false);
        })
    },n*1000)

    axios.get("https://dummyjson.com/quotes")
      .then((res)=>{
        setQuotes(res.data.quotes);
        setLoading(false);
      })

      return(()=>{
        clearInterval(value);
      })
  },[n])

  return {quotes,loading};  
}

function App(){
  const {quotes,loading}=useQuotes(5);
  return <>
    <div>
      {loading?"loading...": quotes.map((qt)=>{
        return<Track key={qt.id} quote={qt.quote} author={qt.author}/>
      })}
    </div>
  </>
}

function Track({quote,author}){
  return(
    <div>
      {quote}
      <br />
      {author}
    </div>
  )
}

export default App;

