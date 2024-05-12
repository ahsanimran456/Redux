import { useCallback, useReducer, useState } from 'react'
import './App.css'
import Todos from './Components/Todos';

function App() {
  const init = {
    todos: []
  }

  // todoReducer contains current state and action this function will return new state and manage the state ,
    // this function will be called when ever we dispatch an action 
  
  const todoReducer = (state, action) => {
    
  }
  const [state, dispatch] = useReducer(todoReducer, init)
  return (


    <div>
      adsads
    </div>
  )
}

export default App
