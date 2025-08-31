import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [render , setrender] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setrender(render=>!render);
    }, 5000);
  },[render])

  return (
    <>
      {render?<MyComoponent></MyComoponent>:<div></div>}
    </>
  )
}

// function MyComoponent() {
//   const [count,setCount] = useState(0);

//   const increasecount = ()=>{
//     setCount(count+1);
//   }
//   return <div>
//     <p>{count}</p>
//     <button onClick={increasecount}>increment</button>
//   </div>
// }

function MyComoponent() {
  useEffect(()=>{
    console.log("component mounted");
    return ()=>{
      console.log("Components unmounted")
    }
  },[])
  return <div>
    from inside the components
  </div>
}
export default App
