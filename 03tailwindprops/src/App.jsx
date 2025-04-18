import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"

function App() {
  const [count, setCount] = useState(0);
  const[counter,setCounter]=useState(15);
  const addValue = () =>{
    // By using this method only one time value will increase 
    /* by using this only value change from 15 to 16  */
   /* setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);   */

    // updated form of this code when we have to add more than one value
    /* By using this value will be updated directly to 18 from 15 by one click */
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);




    
  }
  const removeValue = () =>{
    setCounter(counter-1);
  }

  return (
    <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
  <Card  username="Ali  " />
  <Card  username="Ali1"  btnText="click me"/>
  <br />
  <h1>Chai aur code</h1>
  <button className=' bg-blue-700 text-black' onClick={addValue}>Add value{counter}</button><br />
  <button onClick={removeValue}>Remove value{counter}</button><br />
  <p>Footer:{counter} </p>


    </>
  )
}

export default App
