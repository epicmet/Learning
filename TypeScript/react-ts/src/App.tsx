import React from "react";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodo] = React.useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
    };

    setTodo((prevTodos) => [...prevTodos, newTodo]);
  };

  const todoDeleteHandler = (id: string) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
