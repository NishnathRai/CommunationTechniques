import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    function fetchIt(){
        fetch("http://localhost:3000")
        .then((val)=>val.json())
        .then((val)=>{
        setCount(val.count);
        })
    }
    setTimeout(()=>{
        fetchIt();
    },1000);
  },[count]);

  return (
    <>
        <button >
          count is {count}
        </button>
    </>
  )
}

export default App
