import React, { useCallback, useEffect, useReducer, useState } from 'react'
import './App.css'
import Todos from './Components/Todos';

function App() {
  const init = {
    todos: []
  }

  // todoReducer contains current state and action this function will return new state and manage the state ,
  // this function will be called when ever we dispatch an action 

  const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [...state.todos, action.payload]
        }
      // case 'DELETE_TODO':
      //   return {
      //     todos: state.todos.filter((todo, index) => index !== action.payload)
      //   }
      default:
        return state
    }

  }
  const [state, dispatch] = useReducer(todoReducer, init)
  const [UserInput, setUserInput] = useState("");

  useEffect(() => {
    console.log(state);
  }, [state]);

  const HandleOnchange = useCallback((e) => {
    setUserInput(e.target.value)
  }, [])


  const HandleAddTodo = useCallback(() => {
    dispatch({
      type: 'ADD_TODO',
      payload: UserInput
    })
    setUserInput("")
  })
  return (
    <React.Fragment>
      <input type="text" placeholder='Enter Todo' onChange={HandleOnchange} />

      <button onClick={HandleAddTodo}>Add Todo </button>

    </React.Fragment>

  )
}

export default App
