import { Form } from "./Form";
import { TodoList } from "./TodoList";
import { useState } from "react";
import Footer from "./Footer";
export const Todo = () => {
  const [todoList, setTodos] = useState([]); // added this state to the parent as it is needed by both of the components
  return (
    <div>
      <Form todoList={todoList} setTodos={setTodos} />
      <TodoList todoList={todoList} setTodos={setTodos} />
      <Footer todoList={todoList} />
    </div>
  );
};
