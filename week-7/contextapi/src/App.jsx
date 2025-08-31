import { useState } from 'react'
import { CountContext } from './context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)


  //wrap anyone who want to use  the teleported value inside a provider
  return (
    <>
      <CountContext.Provider value={{count,setCount}}>
        <Count></Count>
      </CountContext.Provider>
    </>
  )
}
function Count() {
  return <div>
    <CountRender ></CountRender>
    <Buttons ></Buttons>
  </div>
  
}

function CountRender() {
  const {count} = useContext(CountContext);
  return <div>
    {count}
  </div>
}
function Buttons() { 
  const {count,setCount} = useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }} >Increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }} >Decrease</button>
  </div>
  
}

export default App
