import { useEffect, useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
  const[exchange1Data,setExchange1Data]=useState({});
  const[exchange2Data,setExchange2Data]=useState({});
  const[bankdata,setBankdata]=useState({});

  useEffect(()=>{
    setBankdata({
      income:500
    })
  },[])

  useEffect(()=>{
      setExchange1Data(
        {
          returns:900
        }
      )
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      setExchange2Data(
        {
          returns:100
        }
      )
    },1000)
  },[])

  const cryptoData = useMemo(()=>{
    return(    
      (exchange1Data.returns + exchange2Data.returns)
  )},[exchange1Data,exchange2Data]
  )
  const incomeTax = (cryptoData + bankdata.income)*0.3
  return (
    <>
      hi there, your income tax is {incomeTax}
    </>
  )
}

export default App
