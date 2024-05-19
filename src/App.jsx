import { React, useRef, useState } from 'react'
import './index.css'
import Header from './components/Header'
import Show from './components/Show'
import Form from './components/Form'


const App = () => {

  return (
    <>
      <div className="main flex items-center bg-black justify-center h-screen w-full p-10">
        <div className="left w-1/2 h-full flex flex-col gap-10 items-center justify-center">
            <Header  />
            <Form />
        </div>
        <div className="right w-1/3 max-h-[90%] flex flex-col items-center justify-center gap-4">
          <Show />
        </div>



      </div>
    </>
  )
}

export default App