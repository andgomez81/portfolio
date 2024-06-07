import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { About } from './About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="menu">
        <h2>Menu</h2>
      </div>
      <h1>Portfolio</h1>
      <div className="card">
        <h3>More info</h3>
       
      </div>
      <div className="read-the-docs">
      <p>Lets open the box!</p>
      </div>
    </>
  )
}

export default App
