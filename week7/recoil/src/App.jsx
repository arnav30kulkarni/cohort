import React from 'react'
import { RecoilRoot, useRecoilState, useSetRecoilState , useRecoilValue } from 'recoil'
import './App.css'
import CountAtom from '../store/atoms/Count'

function App() {
  return (
    <>
    <RecoilRoot>
      <Count />
    </RecoilRoot>
   </>
  )
}
 

function Count(){
 return(
  <>
  <CountRender/>
  <Button />
  </>
 )
}

function CountRender(){
  const count = useRecoilValue(CountAtom);
  return(
  <div>
    {count}
  </div>
  )
}

function Button(){
  const setCount = useSetRecoilState(CountAtom);
  return( <div>
    <button onClick={()=>{
      setCount(count => count + 1)
    }}>increase count</button>
    <button onClick={()=>{
      setCount(count => count - 1)
    }}>decrease count</button>
  </div>)
}

export default App