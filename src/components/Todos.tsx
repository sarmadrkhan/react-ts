import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((x) => (
        <TodoItem text={x.text} key={x.id} />
      ))}
    </ul>
  );
};

export default Todos;
