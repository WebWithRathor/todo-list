import React  from 'react'
import './index.css'
import Left  from './components/left.jsx'
import Right  from './components/right.jsx'


const App = () => {
  return (
    <>
    <div className="main flex flex items-center bg-black justify-center h-screen w-full p-10">
      
      <Left/>
      <Right a="a"/>


    
    </div>
    </>
  )
}

export default App