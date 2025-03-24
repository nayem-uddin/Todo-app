export default function Footer({ todoList }) {
  let completedTodos = 0;
  let incompleteTodos = 0;
  todoList.map((todo) => {
    todo.done ? completedTodos++ : incompleteTodos++;
  });
  return (
    <div className="fixed-bottom row bg-info">
      <div className="h1 col" style={{ textAlign: "center" }}>
        Done: {completedTodos}
      </div>
      <div className="h1 col" style={{ textAlign: "center" }}>
        Todo: {incompleteTodos}
      </div>
    </div>
  );
}
