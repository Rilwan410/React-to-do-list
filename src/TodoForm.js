import React, { useState, useRef} from "react";

function TodoForm(props) {
    const [input, setInput] = useState(null)
    const inputRef = useRef()

    
    const handleInput  = (e) => {
        setInput(e.target.value)
    }

    const handleAddTodo = (e) =>{
        e.preventDefault()
        if (inputRef.current.value == '' ) return
        props.setTodo([...props.todo, {name: input, id: Math.floor(Math.random() * 10000), completed: false}])
        // console.log(props.todo)
        inputRef.current.value = ''
    }
  

  return (
    <div>
      <form>
        <div className='todo-button-container'>
        <input className = "todo-input" type="text"  ref = {inputRef} onChange = {handleInput}/>
        <button className ='todo-button' onClick = {handleAddTodo}>Add Todo</button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
