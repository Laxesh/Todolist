import { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";

export default function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
  };

  return (
    <>
      <form className="">
        <input type="text" placeholder="Write Todo..." className="" />
        <button type="submit" className="">
          Add
        </button>
      </form>
    </>
  );
}
