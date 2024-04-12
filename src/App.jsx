import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym from 7-9",
      completed: false
    },
    {
      title: "Study DSA",
      description: "From 9-10",
      completed: false
    }
  ]);

  function addTodo() {
    setTodos([...todos, {
      title: "new title ",
      description: "desc of new todo"
    }]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
