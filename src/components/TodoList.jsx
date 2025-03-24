import styles from "./stylesheets/todolist.module.css";
import TodoItem from "./TodoItem";
export const TodoList = ({ todoList, setTodos }) => {
  const sortedTodoList = todoList
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodoList.map((todo) => (
        <TodoItem
          setTodos={setTodos}
          todoList={todoList}
          todo={todo}
          key={todo.name}
        />
      ))}
    </div>
  );
};
