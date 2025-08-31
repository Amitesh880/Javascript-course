import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Revenuecard } from "./components/RevenueCard";

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className='grid grid-cols-4'>
   <Revenuecard title={"Amount pending"} amount={"92,312,20"} orderCount={13}></Revenuecard>
   </div>
   </>
  )
}

export default App
