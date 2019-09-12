import React, { useState } from 'react';

function Todo ({todo, index, completeTodo, removeTodo} ) {
    return (
        <div style={{textDecoration: todo.isComplete?'line-through' : ''}} className="todo">
          {todo.text}
          <div>
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>x</button>
          </div>
        </div>
    )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder = "Add Todo.."
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function Todos() {
  // Declare a new state variable, which we'll call "count"
  const [todos, setTodos] = useState([
      {
          text: 'Learn About React',
          isComplete: false
      },
      {
          text: 'Meet Friend for chae',
          isComplete: false
      },
      {
          text: 'Build cool todo app',
          isComplete: false
      }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {    
    const newTodos = [...todos ]
    newTodos[index].isComplete=true
    setTodos(newTodos)
  }

  const removeTodo = index => {    
    const newTodos = [...todos ]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return (
    <div className ='todos'>
    <div className = 'todo-list'>
      {todos.map((todo,index) => (
          
          //{todo.text}
        <Todo key={index} index={index} todo={todo} 
        completeTodo={completeTodo} removeTodo={removeTodo} />    
      ))}
      <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

 export default Todos;