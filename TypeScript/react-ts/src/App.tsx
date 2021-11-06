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

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
