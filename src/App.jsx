import { useState } from 'react';
import './App.css'

export default function App() {
  const [numero, setContador] = useState(0)

  function incrementar() {
    setContador(numero + 1);
  }

  function decrementar() {
    setContador(numero - 1);
  }

  return (
    <>
      <div>
        <h1>contador</h1>
        <p>{numero}</p>
        <button onClick={incrementar}>incrementar</button>
        <button onClick={decrementar}>decrementar</button>
        
      </div>
    </>
  )
}