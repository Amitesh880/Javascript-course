import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [Id, setSelectedId] = useState(1);

  return (
    <>
      <button onClick={() => setSelectedId(1)}>1</button>
      <button onClick={() => setSelectedId(2)}>2</button>
      <button onClick={() => setSelectedId(3)}>3</button>
      <Todo id={Id} />
    </>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/todos/${id}`)
      .then(response => {
        setTodo(response.data);
      });
  }, [id]);

  if (!todo) return <div>Loading...</div>;

  return (
    <div>
      <h1>ID: {todo.id}</h1>
      <h2>Task: {todo.todo}</h2>
      <h3>Status: {todo.completed ? "Completed" : "Pending"}</h3>
    </div>
  );
}

export default App;