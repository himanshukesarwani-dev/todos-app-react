import React from 'react';
import './style.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { DoneTodo } from './pages/DoneTodo';
import { OpenTodo } from './pages/OpenTodo';
import { TodoList } from './pages/TodoList';
import { AboutTodo } from './pages/AboutTodo';

export default function App() {
  return (
    <div>
      <h1>Todos</h1>
      <nav>
        <NavLink to="/"> Home</NavLink>
        <br />
        <NavLink to="/donetodo"> Done Todo</NavLink>
        <br />
        <NavLink to="/opentodo"> Open Todo</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/donetodo" element={<DoneTodo />} />
        <Route path="/opentodo" element={<OpenTodo />} />
        <Route path="/todolist/about/:productId" element={<AboutTodo />} />
      </Routes>
    </div>
  );
}
