import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';
import { useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputvalue, setinputvalue] = useState(1);
  // const [count, setCount] = useState(0);


  let count = useMemo(()=>{

  
    let finalcount =0;

    for (let i = 1; i <=inputvalue; i++) {
      finalcount= finalcount+i;   
    }



    return finalcount; 

    
  },[inputvalue])
  // useEffect(()=>{
  //    let finalcount =0;
  //   for (let i = 1; i <=inputvalue; i++) {
  //     finalcount= finalcount+i; 
  //   }
  //   setCount(finalcount);
  // },[inputvalue])

  return (
    <>
    <input onChange={(e)=>{
      setinputvalue(e.target.value);
    }} placeholder={"find the sum from 1 to n"}/>
    <br />
    sum: {count}
    <br />
      <button onClick={()=>{
        setCounter(counter+1);
      }} >Counter ({counter})</button>
    </>
  )
}

export default App
