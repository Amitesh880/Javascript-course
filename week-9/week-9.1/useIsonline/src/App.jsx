import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function useIsonline() {
  const[Online ,setonline] = useState(navigator.onLine);

  useEffect(()=>{
    window.addEventListener('online',()=>{
      setonline(true)
    })
    window.addEventListener('offline',()=>{
      setonline(false)
    })

    return ()=>{
      window.addEventListener('online',()=>{
      setonline(true)
    })
    window.addEventListener('offline',()=>{
      setonline(false)
    })
    }
  },[])
  return {Online}
}
function App() {
  const Online = useIsonline();

  if (Online) {
    return <div>
      Online
    </div>
  }
  return (
    <>
      <div>You are offline</div>
    </>
  )
}

export default App
