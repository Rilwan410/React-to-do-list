import React, { useEffect } from "react";

function Todo(props) {
  const liStyles = {
    listStyle: "none",
    textDecoration: !props.todo.completed ? "" : "line-through",
  };
  const containerStyle = {
    opacity:!props.todo.completed ? "" : '.4'

  }

  const deleteTodo = (id) => {
    const newList = props.allTodos.filter((todo) => {
      return todo.id !== id;
    });

    props.setTodo(newList);
  };
  console.log(props.allTodos);
  const handleDelete = () => {
    if (props.allTodos.length == 2) {
      localStorage.clear("todoList");
    }
    deleteTodo(props.todo.id);
  };

  const handleCompleted = () => {
    handleComplete(props.todo.id);
  };

  const handleComplete = (id) => {
    let allTodos = [...props.allTodos];
    if (props.todo.id === id) {
      if (!props.todo.completed) {
        props.todo.completed = !props.todo.completed;
      } else if (props.todo.completed) {
        props.todo.completed = !props.todo.completed;
      }
    }
    props.setTodo(allTodos);
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(props.allTodos));
    console.log("hi");
  }, [props.setTodo, props.todo.completed, handleDelete, props.allTodos]);

  console.log(props.allTodos);
  return (
    <div style = {containerStyle} className="todos-container">
      <li className="todos" style={liStyles}>
        {props.todo.name == "" ? null : props.todo.name}
      </li>
      <div className="todo-commands">
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
        <i className="fa-solid fa-check" onClick={handleCompleted}></i>
      </div>
    </div>
  );
}

export default Todo;
// <i class="fa-solid fa-trash"></i>