import "./App.css";
import { Todoprovider } from "./Contexts/TodoContext";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? todo : t)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <Todoprovider value={{ addTodo, deleteTodo, updateTodo, toggleCompleted, todos }}>
      <div className="">
        <div className="">
          <h1 className="">Manage Your Todos</h1>
          <div className="">{/* Todo form goes here */}</div>
          <div className="">{/*Loop and Add TodoItem here */}</div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
