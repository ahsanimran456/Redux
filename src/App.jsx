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
      case 'DELETE_TODO':
        return {
          todos: state.todos.filter(todo => todo.id !== action.payload)
        }
      case "EDIT_TODO":
        return {
          todos: state.todos.map(todo =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
          )
        }
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

  const HandleDeleteTodo = useCallback((ID) => {
    dispatch({ type: 'DELETE_TODO', payload: ID })
  })

  const HandleEdit = useCallback((ID) => {
    dispatch({ type: 'EDIT_TODO', payload: ID })
  })
  const memoizedTodos = useMemo(() => state.todos, [state.todos])
  return (
    <React.Fragment>
      <input type="text" value={UserInput} placeholder='Enter Todo' onChange={HandleOnchange} />
      <button onClick={HandleAddTodo}>Add Todo </button>
      <Todos todos={memoizedTodos} OnDelete={HandleDeleteTodo} OnEdit={HandleEdit} />
    </React.Fragment>
  )
}

export default App
