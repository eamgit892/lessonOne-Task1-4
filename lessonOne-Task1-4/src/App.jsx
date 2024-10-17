import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cuteAnimal from "./img/cuteAnimal.png"
import './App.css'

// here will be import for my component
import hello from './components/HelloWorldText'
import textAndPicture from './components/taskOne-5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        {hello()}

        {textAndPicture("This is text for Task 1-5*", cuteAnimal, {w: "650px", h: "50px"})}
       
       
      </div>
      
    </>
  )
}

export default App
