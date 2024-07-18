// src/js/component/TodoItem.js
import React from 'react';
//import '@fortawesome/fontawesome-free/css/all.min.css';
const TodoItem = ({ todo, removeTodo }) => {
  // Función para truncar el texto si excede los 50 caracteres
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  return (
    <div className="todo-item">
      <span>{truncateText(todo, 50)}</span>
      <button className="delete-btn" onClick={() => removeTodo(todo)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;

