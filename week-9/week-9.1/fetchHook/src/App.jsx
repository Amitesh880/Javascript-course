import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function useTodos(n) {
   const [todos , settodos] = useState([]);
   const [loading,setloading] = useState(true);
  useEffect(()=>{
  const value = setInterval(() => {
    axios.get("https://dummyjson.com/todos")
   .then((res)=>{
    settodos(res.data.todos);
    setloading(false);
   })
   }, n*1000);

   axios.get("https://dummyjson.com/todos")
   .then((res)=>{
    settodos(res.data.todos);
    setloading(false);
   })
   return ()=>{
    clearInterval(value)
   }
  },[n])
  return {todos,loading};
}


function App() {
 const {todos,loading} = useTodos(5);

 if(loading){
  return <div>
    loading...
  </div>
 }
  return (
    <>
      {todos.map(todo=> <Todo todo={todo}></Todo>)}
    </>
  )
}
function Todo({todo}) {
  return <div>
    {todo.todo}
    <br />
    {todo.userId}
  </div>
}


export default App
