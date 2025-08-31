import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function usedebounce(value,timeout) {
  const [debounceValue,setDebounceValue]= useState(value);
  useEffect(()=>{
   let timeounumber = setTimeout(() => {
      setDebounceValue(value);
    }, timeout);

    return ()=>{
      clearTimeout(timeounumber);
    }
  },[value])
  return debounceValue;
}
function App() {
  const [value, setValue] = useState(0);
  const debouncedValue = usedebounce(value,500);

  return (
    <>
      Debounced value is {debouncedValue}
      <input type="text" onChange={e=>setValue(e.target.value)}/>
    </>
  )
}

export default App
