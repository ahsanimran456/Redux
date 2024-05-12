import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
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


  const HandleOnchange = useCallback((e) => {
    setUserInput(e.target.value)
  }, [])


  const HandleAddTodo = useCallback(() => {
    if (UserInput.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text: UserInput } });
      setUserInput('');
    }
  }, [UserInput, dispatch])

  const memoizedTodos = useMemo(() => state.todos, [state.todos])
  return (
    <React.Fragment>
      <input type="text" value={UserInput} placeholder='Enter Todo' onChange={HandleOnchange} />
      <button onClick={HandleAddTodo}>Add Todo </button>

      <Todos todos={memoizedTodos} />

    </React.Fragment>

  )
}

export default App
