import React, { useContext } from 'react';
import { TodoCard } from '../components/TodoCard';
import { FetchContext } from '..';

export function DoneTodo() {
  const { todos } = useContext(FetchContext);

  const doneTodoList = todos.filter(({ isCompleted }) => isCompleted);

  return (
    <div>
      {doneTodoList?.map((todo) => (
        <TodoCard todo={todo} aboutTodo />
      ))}
    </div>
  );
}
