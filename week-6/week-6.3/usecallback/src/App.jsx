import { memo, useCallback } from 'react';
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
    },5000);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setexchangedata1(
        { returns: 100 }
      )
    }, );
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setexchangedata2(
        { returns: 100 }
      )
    }, );
  }, [])
 
  const cryptoreturns = useCallback(function() {
    return exchangedata1.returns + exchangedata2.returns;
  }, [exchangedata1,exchangedata2]);

  return (
    <>
      <Crytocalculator  cryptoreturns={cryptoreturns}></Crytocalculator>
    </>
  )
}
const Crytocalculator = memo(({cryptoreturns})=>{
  console.log("hi there child rerenders")
  return <div>
    Your cryto returns is {cryptoreturns()}
  </div>
})

export default App