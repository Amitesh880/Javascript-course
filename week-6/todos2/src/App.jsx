import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = () => {
      fetch("https://dummyjson.com/todos")
        .then(async (res) => {
          const json = await res.json();
          setTodos(json.todos);
        })
        .catch((err) => console.log("Failed to fetch todos:", err));
    };

    fetchTodos(); // initial fetch
    const intervalId = setInterval(fetchTodos, 10000);

    return () => clearInterval(intervalId); // cleanup
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.todo} description={todo.completed ? "Completed" : "Pending"} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

export default App;