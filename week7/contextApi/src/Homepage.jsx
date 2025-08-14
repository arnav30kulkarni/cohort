import React, { Suspense } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
const Landing = React.lazy( ()=> import('../components/Landing')
)
const Navbar = React.lazy(()=>import("../components/Navbar"))

function App() {
  return (
    <>
   <BrowserRouter>
      <Navigator />
      <Routes>
        <Route path='/' element={ <Suspense fallback={"loading...."}><Landing /> </Suspense>} />
        <Route path='/navbar' element={<Suspense fallback={"loading...."}><Navbar /></Suspense>} />
      </Routes>
   </BrowserRouter>
   </>
  )
}

const Navigator = ()=>{
  const navigate = useNavigate(); 
  return(
  <div >
      <button onClick={()=>{
        navigate("/");
      }}>
        Landing
      </button>
      <button onClick={()=>{
        navigate("/navbar");
      }}>
      navbar
      </button>
    </div>)
}

export default App