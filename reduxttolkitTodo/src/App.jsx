import { useState } from 'react'
import './App.css'
import AddTodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center'>Learn about Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
