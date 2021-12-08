
import { useState } from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import Heading from './Heading';
import './TodoAdd.css';
function App() {
  const [todo, setTodo] = useState([])

  const formData = (data) => {
    setTodo([{ id:Math.random(), ...data} , ...todo])
  }
  
  const deleteTodos = (id) => {
      const copyOfTodo = todo.filter(eachOne => {
       return eachOne.id !== id
      })
      setTodo(copyOfTodo)
  }

  const isDone = (id) => {
    const taskDone = todo.map(eachTodo => {
      if(eachTodo.id === id){
        return{
          ...eachTodo,
          done : !eachTodo.done
        }
      }
      return eachTodo;
    })
    setTodo(taskDone)
  }
  

  return (
    <div className="App">
      <Heading />
      <TodoAdd formData={formData}  />
     
      <TodoList todo={todo} setTodo={setTodo} deleteTodos={deleteTodos} isDone={isDone} />
      
    </div>
  );
}

export default App;
