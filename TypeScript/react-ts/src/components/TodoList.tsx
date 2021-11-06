import React from "react";

interface TodoListProps {
  items: {
    id: string;
    text: string;
  }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ onDeleteTodo, items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
