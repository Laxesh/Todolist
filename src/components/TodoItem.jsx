import { useTodo } from "../Contexts/TodoContext";

export default function TodoItem({ todo }) {
  const { toggleCompleted, updateTodo, deleteTodo } = useTodo;
  const [todoEdit, setTodoEdit] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setTodoEdit(false);
  };

  const ToggleComplete = () => {
    toggleCompleted(todo.id);
  };
}
return (
  <>
    <input type="checkbox" className="" checked={todo.completed} onChange={ToggleComplete} />

    <input type="text" className="" value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)} readOnly={!todoEdit} />

    {/* Edit, Save Button */}
    <button
      className=""
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
    <button className="" onClick={() => deleteTodo(todo.id)}>
      X
    </button>
  </>
);
