import { useState } from 'react'
import './App.css'
import Todos from './Components/Todos';

function App() {
  const [Counter, setCounter] = useState([]);
  const [click, setclick] = useState(!false);


  return (
    <>
      <Todos Counter={Counter} />
      {click}
      <button onClick={() =>{ 
        setclick(!click)
        // setCounter([...Counter, 1])
      }
    }>CLick me</button>
    </>

  )
}

export default App
