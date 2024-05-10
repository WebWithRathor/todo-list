import React from 'react'

const left = () => {
  return (
    <div className="left w-1/2 h-full flex flex-col gap-10 items-center justify-center">
      <div className="head w-2/3 h-[35vh] bg-zinc-900 rounded-xl py-6 flex gap-4 items-center justify-center">
        <h1 className='text-3xl text-white font-medium'>Progress</h1>
        <div className="progress w-1/2 h-full flex items-center justify-center relative">
            <svg width="100%" height="100%" className='absolute' viewBox="0 0 100 100">
            <circle r="40" cx='50' cy='50'  fill="transparent" stroke="#e0e0e0" stroke-width="12px"></circle>
  <circle r="40" cx='50' cy='50' fill="transparent" stroke="#60e6a8" stroke-width="12px" stroke-dasharray="251.1px" stroke-dashoffset="62.775px"></circle>
  </svg>
            <h1 className='text-2xl font-medium text-white'>1/1</h1>
        </div>
      </div>
      <form className='w-2/3 flex items-center gap-2 rounded-full border p-2'>
        <input type="text" placeholder='Task' className='px-2 text-xl outline-none text-white py-1 bg-transparent  w-full ' />
        <h1 className='bg-zinc-900 rounded-full px-2 aspect-square text-2xl text-white font-black flex items-center justify-center'><i class="ri-add-line"></i></h1>
      </form>
      </div>
  )
}

export default left