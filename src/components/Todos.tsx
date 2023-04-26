import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (todoId: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          text={item.text}
          key={item.id}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
