import { useEffect, useState } from "react";

function TodoListPage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const handleAddTodo = () => {
    fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTodo }),
    })
      .then((res) => res.json())
      .then((data) => setTodos([...todos, data]));
    setNewTodo("");
  };

  const handleToggleComplete = (id) => {
    fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((updatedTodo) => {
        setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
      });
  };

  const handleDeleteTodo = (id) => {
    fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
              onClick={() => handleToggleComplete(todo.id)}
            >
              {todo.title}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default TodoListPage;
