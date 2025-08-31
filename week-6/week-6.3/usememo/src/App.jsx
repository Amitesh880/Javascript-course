import { useMemo } from 'react';
import { useEffect, useState } from 'react'

function App() {
  const [exchangedata1, setexchangedata1] = useState({});
  const [exchangedata2, setexchangedata2] = useState({});
  const [bankdata, setbankdata] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setbankdata(
        { income: 100 }
      )
    }, 1000);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setexchangedata1(
        { returns: 100 }
      )
    }, 7000);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setexchangedata2(
        { returns: 100 }
      )
    }, 5000);
  }, [])
 
  const cryptoreturns = useMemo(() => {
     console.log("hi there before")
    return exchangedata1.returns + exchangedata2.returns;
  }, [exchangedata1,exchangedata2]);

  const incometax = (bankdata.income + cryptoreturns) * 0.3;

  return (
    <>
      <div>hi your income tax is {incometax}</div>
    </>
  )
}

export default App
