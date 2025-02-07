// src/js/component/TodoForm.js
import React, { useState } from 'react';


const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button type="submit">Add</button> {/* Añadido para el botón de envío */}
    </form>
  );
};

export default TodoForm;
