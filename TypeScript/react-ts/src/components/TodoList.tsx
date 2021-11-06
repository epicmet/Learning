import React from "react";

interface TodoListProps {
  items: {
    id: string;
    text: string;
  }[];
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
