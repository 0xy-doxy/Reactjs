import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter, setCounter] = useState(0)

    // let counter = 0

    const addValue = () =>{
      
      // counter + 1
      if(counter != 20){
        setCounter(counter + 1)
      }
      
    }

    const removeValue = () =>{
      
      if(counter != 0){
        setCounter(counter - 1)
      }
     
    }

  return (
    <>
     
      <h1>chai aur react</h1>
      <h3>counter value : {counter}</h3>
      <button onClick={addValue}>add value  {counter}</button>
      <br />
      <button onClick={removeValue}>remove value  {counter}</button>
      <p>footer :  {counter}</p>
      
    </>
  )
}

export default App
