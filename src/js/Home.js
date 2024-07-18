// src/js/home.js
import React, { useState } from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import '/src/styles/App.css';

function Home() {
  const [todos, setTodos] = useState([]);
  const [removedCount, setRemovedCount] = useState(0);

  const addTodo = (task) => {
    // Truncar el texto si excede los 50 caracteres
    const truncatedTask = task.length > 50 ? task.slice(0, 50) : task;
    setTodos([...todos, truncatedTask]);
  };

  const removeTodo = (taskToRemove) => {
    setTodos(todos.filter((todo) => todo !== taskToRemove));
    setRemovedCount(removedCount + 1);
  };

  const clearTodos = () => {
    setRemovedCount(removedCount + todos.length);
    setTodos([]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <h2>Total Tasks: {todos.length}</h2>
      <TodoList todos={todos} removeTodo={removeTodo} />
      <button onClick={clearTodos}>Clear All Tasks</button>
      <h2>Tasks Removed: {removedCount}</h2>
    </div>
  );
}

export default Home;
