import { useState } from "react";

let counter = 4;
function App(){
  const [todos, setTodos] = useState([{
    id:1,
    title:"go to gym",
    description:"go to gym today"
  },{
    id:2,
    title:"go to office",
    description:"go to office today"
  }, {
    id:3,
    title:"go to college",
    description:"go to college today"
  }])

  function addTodo(){
    // setTodos([...todos, {
    //   id:4,
    //   title: Math.random(),
    //   description: Math.random()
    // }])

    const newTodos = [];
    for (let i =0; i<todos.length; i++){
      newTodos.push(todos[i]);
    }
    newTodos.push({
      id:counter++,
      title:Math.random(),
      description: Math.random()
    })
    setTodos(newTodos)

  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} /> )}
      {/* {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description} /> 
      })} */}
    </div>
  )
}

function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App