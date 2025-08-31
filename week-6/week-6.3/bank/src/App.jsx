import { useEffect, useState } from 'react'

function App() {
  const [exchangedata, setexchangedata] = useState({});
  const [bankdata ,setbankdata] = useState({});
  console.log("hi there re-renders");
  useEffect(()=>{
     setTimeout(() => {
    setbankdata(
     { income:100}
    )
  }, 1000);
  },[])
  useEffect(()=>{
     setTimeout(() => {
    setexchangedata(
     { returns:100}
    )
  }, 5000);
  },[])
  const incometax = (bankdata.income + exchangedata.returns) * 0.3;
  return (
    <>
     <div>hi your income tax is {incometax}</div> 
    </>
  )
}

export default App
