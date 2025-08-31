import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const [incometax, setincometax] = useState(2000)
  const divref = useRef();
  useEffect(()=>{
    setTimeout(() => {
      console.log(divref.current);
      divref.current.innerHTML = 10;
    }, 5000);
  })

  return (
    <div>
      hi there , your income tax returns are <div ref={divref}>{incometax}</div>
    </div>
  )
}

export default App
