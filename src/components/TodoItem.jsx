import React, { useState } from "react"; //
import { useTodo } from "../Contexts/TodoContext";
import sty from "./TodoItem.module.css";

const TodoItem = ({ todo }) => {
  const { toggleCompleted, updateTodo, deleteTodo } = useTodo();
  const [todoEdit, setTodoEdit] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setTodoEdit(false);
  };

  const toggleComplete = () => {
    toggleCompleted(todo.id);
  };

  return (
    <div className={sty.item}>
      <input type="checkbox" className={sty.check} checked={todo.completed} onChange={toggleComplete} />

      <input
        type="text"
        className={sty.input}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!todoEdit}
        style={{
          border: todoEdit ? "1px solid black" : "transparent",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      />

      {/* Edit, Save Button */}
      <button
        className={sty.button}
        onClick={() => {
          if (todo.completed) return;

          if (todoEdit) {
            editTodo();
          } else setTodoEdit((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {todoEdit ? "Save" : "Edit"}
      </button>
      {/* Delete Todo Button */}
      <button className={sty.button} onClick={() => deleteTodo(todo.id)}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
