import { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";
import style from "./TodoForm.module.css";

export default function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <>
      <form className="" onSubmit={add}>
        <input type="text" className={style.input} value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit" className={style.add}>
          Add
        </button>
      </form>
    </>
  );
}
