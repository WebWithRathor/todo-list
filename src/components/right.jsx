import React from 'react'

function right(a,b) {
  console.log(a)
  return (
    <div className="right w-1/3 h-full flex flex-col items-center justify-center gap-4">
<h1 className='text-white w-full text-3xl font-medium mb-4'>Tasks</h1>
      <div className="tasks w-full flex flex-col gap-2">
        <div className="task flex items-center bg-zinc-900  rounded-full px-4 py-2 gap-2">
        <i className="ri-circle-fill text-green-500 mt-1 "></i><h1 className='text-white text-xl  w-full line-through'>Task1</h1>
        </div>
        <div className="task flex items-center bg-zinc-900  rounded-full px-4 py-2 gap-2">
        <i className="ri-circle-line text-white mt-1 "></i><h1 className='text-white text-xl  w-full '>Task1</h1>
        </div>
      </div>

</div>
  )
}

export default right