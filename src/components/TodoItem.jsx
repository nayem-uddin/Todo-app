import styles from "./stylesheets/todolist.module.css";
export default function TodoItem({ setTodos, todoList, todo }) {
  function completed(item) {
    setTodos(
      todoList.map((todo) =>
        todo === item ? { ...todo, done: !item.done } : todo
      )
    );
  }
  function deleteTodo(item) {
    // console.log(`delete ${item}`);
    setTodos(todoList.filter((todoItem) => todoItem !== item));
  }
  // next.textContent = status;
  return (
    <div className={`${styles.item} clearfix`}>
      <div
        className={`float-left ${todo.done ? styles.complete : ""}`}
        style={{ textTransform: "capitalize" }}
      >
        {todo.name}
      </div>
      <div className="float-right">
        <button
          className={`btn btn-danger mr-2`}
          onClick={() => deleteTodo(todo)}
        >
          Delete
        </button>
        <button
          className={`btn ${todo.done ? "btn-secondary" : "btn-success"} `}
          onClick={() => completed(todo)}
        >
          {todo.done ? "Add to Todos" : "Mark as complete"}
        </button>
      </div>
    </div>
  );
}
