import React from 'react';
import { TodoCard } from '../components/TodoCard';
import { useContext } from 'react';
import { FetchContext } from '..';

export function TodoList() {
  const { todos } = useContext(FetchContext);
  console.log(todos);
  return (
    <div>
      {todos?.map((todo) => (
        <TodoCard todo={todo} />
      ))}
    </div>
  );
}
