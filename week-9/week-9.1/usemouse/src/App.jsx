import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function useMousepointer(){
  const [pointer, setpointer] = useState({x:0 ,y:0});

  useEffect(()=>{
    window.addEventListener('mousemove', (e)=>{
      setpointer({x:e.clientX ,y:e.clientY});
    })

    return ()=>{
       window.addEventListener('mousemove', (e)=>{
      setpointer({x:e.clientX ,y:e.clientY});
    })
    }
   
  },[])
   return pointer;
}

function App() {
  const point = useMousepointer();

  return (
    <>
      <div>Your mouse coordinates are {point.x} {point.y}</div>
    </>
  )
}

export default App
