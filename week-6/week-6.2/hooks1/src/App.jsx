import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/todos")
      .then(response => {
        setTodos(response.data.todos);
      });
  }, []);

  return (
    <>
      {todos.map(todo => (
        <Todo key={todo.id} title={todo.todo} completed={todo.completed} />
      ))}
    </>
  );
}

function Todo({ title, completed }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{completed ? "Completed" : "Pending"}</h2>
    </div>
  );
}

export default App;