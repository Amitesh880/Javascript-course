import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function useInterval(n) {
  const [interval, setInter] = useState(0);
  useEffect(()=>{
    const clean = setInterval(() => {
    setInter(i=>i+1)
  }, n*1000);
    setInter(i=>i)
    return ()=>{
      clearInterval(clean);
    }
  },[])
  return interval;
}

function App() {
  const count = useInterval(2);

  return (
    <>
      <div>Your count is {count}</div>
    </>
  )
}

export default App
