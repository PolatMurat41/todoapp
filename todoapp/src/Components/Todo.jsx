import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos}/>
    </div>
  );
}
//inner value in bracket of setTodos() only update todos
//...todos copies latest todos value and update with value that come after ","
// setTodo(""); does empty input box after click submmit
