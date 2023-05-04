import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FetchContext } from '..';
import { TodoCard } from '../components/TodoCard';

export function AboutTodo() {
  const { productId } = useParams();
  const { todos } = useContext(FetchContext);
  const todo = todos?.find(({ id }) => id === +productId);
  console.log(todo);
  return (
    <>
      
      {todo && <TodoCard todo={todo} />}
    </>
  );
}
