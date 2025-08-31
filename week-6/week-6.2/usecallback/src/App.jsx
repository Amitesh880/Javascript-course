import { useState,useCallback,memo } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const inputvalue = useCallback(()=>{
    conlose.log("hi there")
  },[])
  return (
    <>
      <Buttoncomponent inputvalue={inputvalue}></Buttoncomponent>
      <button onClick={()=>{
        setCount(count+1);
      }}>click me({count})</button>
    </>
  )
 
}
 const Buttoncomponent = memo(({inputvalue})=>{
    console.log("render");
    return <div>
      <button>Button clicked</button>
    </div>
  })

export default App
