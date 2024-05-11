import TodoItem from "./TodoItem";
export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
