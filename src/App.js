import { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('')
  const [todos, setTodos] = useState([])

  const handlesave = () => {
    const objectTodo = {
      title: userInput,
      done: false
    }
    const clone = [...todos, objectTodo]
    setTodos(clone)
    setUserInput('')
  }
  const handleKeyDown = (e)=>{
    if(e.key === "Enter"){
      handlesave();
    }
  }
  const handleRemove = (index) => {
    const clone = [...todos]
    clone.splice(index, 1)
    setTodos(clone)
  }
  const handleCheck = (index) => {
    const clone = [...todos]
    clone[index].done = !clone[index].done
    setTodos(clone)
  }
  return (
    <div className="todo-container">
      <h1 className="todo-title">My Todos</h1>
      <div className="add-area">
        <input type="text" value={userInput} onChange={(e) => { setUserInput(e.target.value) }} onKeyDown={handleKeyDown} />
        <button onClick={handlesave}>Save</button>
      </div>

      <ul className="todo-list">
        {
          todos.map((todo, index) => {
            return (
              <li key={index} >
                <div>
                  <input type="checkbox" name="" id="" checked={todo.done} onClick={() => {
                    handleCheck(index)
                  }} />
                  {
                    todo.done ? <s>{todo.title}</s> : todo.title
                  }
                </div>
                <button onClick={() => { handleRemove(index) }}>Remove</button>
              </li>
            )
          })
        }

      </ul>
    </div>
  );
}

export default App;