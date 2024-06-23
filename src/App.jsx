import { React, useRef, useState } from 'react'
import './index.css'
import Header from './components/Header'
import Show from './components/Show'
import Form from './components/Form'


const App = () => {

  return (
    <>
      <div className="main flex sm:flex-row flex-col gap-5 items-center bg-black justify-center h-screen overflow-hidden w-full ">
        <div className="left sm:pt-0  pt-36 px-5 w-full sm:w-1/2 flex flex-col gap-10 items-center justify-center">
            <Header  />
            <Form />
        </div>
        <div className="right w-full px-5 sm:w-1/3 max-h-[90%] flex flex-col items-center justify-center gap-4">
          <Show />
        </div>



      </div>
    </>
  )
}

export default App