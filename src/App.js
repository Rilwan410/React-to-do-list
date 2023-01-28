import "./App.css";
import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


function App() {
  const [todo, setTodo] = useState([{}]);



  let appTodo = localStorage.getItem('todoList')
  useEffect(() =>{
    if(appTodo){
      let todoList = JSON.parse(appTodo)
  setTodo(todoList)
    }
  },[])

 

  return (
    <div className ='container'>
      <h1 className='title'>Todo App</h1>
      <TodoForm todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
