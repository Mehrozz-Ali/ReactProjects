import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setValue]=useState(15);
  const addValue=()=>{
    if(counter<=19){
    setValue(counter+1);
    }
  }
  const decreaseValue=()=>{
    if(counter!=0){
    setValue(counter-1);
  }
  }

  return (
    <>
   
      <h1>Chai aur react</h1>
      <h2>Counter value is : {counter}</h2>

      <button onClick={addValue}>Incease value</button>
      <br/>
      <button onClick={decreaseValue}>Decrease value</button>

    </>
  )
}

export default App
