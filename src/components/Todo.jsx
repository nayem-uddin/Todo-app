import { Form } from "./Form";
import { TodoList } from "./TodoList";
import { useEffect, useState } from "react";
import Footer from "./Footer";
export const Todo = () => {
  const [todoList, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div>
      <Form todoList={todoList} setTodos={setTodos} />
      {todoList.length === 0 && <p className="notify">Todo list is empty</p>}
      {todoList.length > 0 && (
        <TodoList todoList={todoList} setTodos={setTodos} />
      )}
      <Footer todoList={todoList} />
    </div>
  );
};
