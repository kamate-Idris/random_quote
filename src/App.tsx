import { useState } from 'react'
import {quotes} from "../data.js"
import './App.css'
import Quote from './components/Quote.js'


function App() {
  const [current, setCurrent] = useState(0)

  const hanldeClick = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % quotes.length);
  }

  return (
    <>
     <Quote title={quotes[current].citation} author={quotes[current].author} color={quotes[current].color} onClick={hanldeClick}/>
    </>
  )
}





export default App
