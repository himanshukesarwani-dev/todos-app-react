import React from 'react';
import { NavLink } from 'react-router-dom';

export function TodoCard({ todo, aboutTodo }) {
  const { id, title, description, isCompleted } = todo;
  return (
    <>
      <div key={id}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Status: {isCompleted ? <span>Done</span> : <span>Not Done</span>}</p>
        {aboutTodo && (
          <NavLink to={`/todolist/about/${id}`}>Expand Item</NavLink>
        )}
        <hr />
      </div>
    </>
  );
}
