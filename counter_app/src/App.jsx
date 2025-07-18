import { useState } from 'react'   //"hook"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count,setCount] = useState(0);
  

//   return (
//    <div>
//     <CustomButton count={count} setCount={setCount}></CustomButton>
//    </div>
//   )
// }
// function CustomButton(props){
//   function OnclickHandler() {
//     props.setCount(props.count+1);
//   }
//   return <button onClick={OnclickHandler}>
//     Counter {props.count}
//   </button>
// }

function App() {
  const [todos, setTodos] = useState([{
    title:"Go to gym",
    description:"Go to gym from 7-9",
    complete: false
  },{
    title:"Go to gym",
    description:"Go to gym from 5-6",
    complete: true
  },]);
  
  function addtodo() {
    setTodos([...todos,{
      title:"New todos",
      description:"desc of new todos"
    }])
  }

  return (
   <div>
    <button onClick={addtodo}>Add a random todo</button>
    {/* <Todos title={todos[0].title} description={todos[0].description}></Todos>
    <Todos title={todos[1].title} description={todos[1].description}></Todos> */}
    {todos.map(function (todos) {
      return <Todos title={todos.title} description={todos.description}></Todos>
    })}
   </div>
  )
}
function Todos(props){

  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
