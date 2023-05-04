import React from 'react';
import { fakeFetch } from '../api/fakeFetch';
import { useEffect, useState, createContext } from 'react';

export const FetchContext = createContext();

export function ContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getTodoData = async () => {
    setIsLoading(true);
    try {
      const response = await fakeFetch('https://example.com/api/todos');
      if (response.status === 200) {
        setTodos(response.data.todos);
        setIsLoading(false);
        setIsError(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <FetchContext.Provider value={{ todos, isError, isLoading }}>
      {children}
    </FetchContext.Provider>
  );
}
