import React, { useContext } from 'react';
import { TodoCard } from '../components/TodoCard';
import { FetchContext } from '..';

export function OpenTodo() {
  const { todos } = useContext(FetchContext);

  const openTodoList = todos?.filter(({ isCompleted }) => !isCompleted);

  return (
    <div>
      {openTodoList?.map((todo) => (
        <TodoCard todo={todo} aboutTodo />
      ))}
    </div>
  );
}
