import { useEffect, useState } from 'react';
import './App.css'

function App(){
  const[render,setRender]=useState(true);

  useEffect(()=>{
    setInterval(()=>{
      setRender(r=>!r)
    },5000)
  },[])
  return <>
    {render?<MyComponent/>:<div>2nd div</div>}
  </>
}

function MyComponent(){
  useEffect(()=>{
    console.log("component mounted")
    return(()=>{
    console.log("component unmounted");
    })
  },[]);

  return<>
  <div>
    Inside the component
  </div>
  </>
}

//classbased components
class Mycomponent extends React.Component{
  componentDidMount(){
    console.log("component mounted");
  }

  componentWillUnmount(){
    console.log("component unmounted");
  }

  render(){
    return <div>hi there</div>
  }
}

export default App;

