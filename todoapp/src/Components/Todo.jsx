import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totoalTodos=todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totoalTodos={totoalTodos}/>
    </div>
  );
}
//inner value in bracket of setTodos() only update todos
//...todos copies latest todos value and update with value that come after ","
// setTodo(""); does empty input box after click submmit
