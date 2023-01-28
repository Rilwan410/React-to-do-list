import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todo.map((todo) => {
        if (todo.name) {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              allTodos={props.todo}
              setTodo={props.setTodo}
            />
          );
        }
      })}
    </ul>
  );
}

export default TodoList;
