import { useState } from 'react'
import './App.css'
import Dashboard from './screen/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#090909] min-h-screen w-full text-white'>
        <Dashboard />
      </div>
    </>
  )
}

export default App
