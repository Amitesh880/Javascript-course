import { useState } from 'react'

let counter =4;
function App() {
 const [todos ,settodos] = useState([{
        id:1,
        title:"Amitesh1",
        description:"My name is Amitesh1"
    },{
        id:2,
        title:"Amitesh2",
        description:"My name is Amitesh2"
    },{
        id:3,
        title:"Amitesh3",
        description:"My name is Amitesh3"
    }]);

    function Addatodo() {
        settodos([...todos,{
            id:counter++,
            title:Math.random(),
            description:Math.random()
        }])
  }
    return <>
    <button onClick={Addatodo}>Add a todo</button>
    {todos.map(todo=> <Todo key={todo.id} title={todo.title}  description={todo.description}/>)}
  </>
}
function Todo({title,description}) {
    return <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
}

export default App
