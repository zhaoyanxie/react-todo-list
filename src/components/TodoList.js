import React from "react";
import Title from "./Title.js";
import Todo from "./Todo.js";

const TodoList = props => {
  return (
    <div>
      <Title title={props.title} />
      <ul>
        {props.todos.map((eachTodo, index) => (
          <Todo key={index} todo={eachTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;