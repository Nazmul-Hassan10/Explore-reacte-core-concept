import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import User from './User'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  function HandleClick(){
    alert('button clicked')
  }

  const HandleClick2 = () => {
    alert('button clicked 2')
  }

  return (
    <>
      <User></User>
      <Friends></Friends>
      <Counter></Counter>
      <h3>React Core Concepts 2</h3>
      <button onClick={HandleClick}>Click me</button>
      <button onClick={HandleClick2}>Click 2</button>
    </>
  )
}

export default App
