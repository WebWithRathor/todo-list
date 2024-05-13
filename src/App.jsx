import { React, useRef, useState } from 'react'
import './index.css'
import { nanoid } from 'nanoid'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) ?? [])
  const [input, setinput] = useState('')
  function submitHandler(e) {
    e.preventDefault();
    const obj = {
      id: nanoid(),
      task: input,
      complete: false
    }
    setTasks([...tasks, obj])
    setinput('');
    localStorage.setItem('tasks', JSON.stringify([...tasks, obj]));
  }
  function taskCheck(index) {
    const copytask = [...tasks];
    copytask[index].complete = !copytask[index].complete;
    setTasks(copytask);
    localStorage.setItem('tasks', JSON.stringify(copytask));
  }
const circle = useRef(null);
  useGSAP(()=>{
    gsap.to(circle.current,{
      strokeDashoffset: 252 * ((100 - (tasks.filter((e) => e.complete === true).length / tasks.length) * 100) / 100) + 'px'
    })
  },[tasks])

  const deleted = (index) => {
    const copytask = [...tasks];
    copytask.splice(index, 1);
    setTasks(copytask);
    localStorage.setItem('tasks', JSON.stringify(copytask));
  }

  return (
    <>
      <div className="main flex flex items-center bg-black justify-center h-screen w-full p-10">
        <div className="left w-1/2 h-full flex flex-col gap-10 items-center justify-center">
          <div className="head w-2/3 h-[35vh] bg-zinc-900 rounded-xl py-6 flex gap-4 items-center justify-center">
            <h1 className='text-3xl text-white font-medium'>Progress</h1>
            <div className="progress w-1/2 h-full flex items-center justify-center relative">
              <svg width="100%" height="100%" className='absolute ' viewBox="0 0 100 100">
                <filter id="drop-shadow" >
                  <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="lightseagreen" floodOpacity="0.3" />
                </filter>
                <circle r="40"  cx='50' cy='50' fill="transparent" stroke="#e0e0e0" strokeWidth="12px"></circle>
                <circle ref={circle} hidden={tasks.length === 0 ? 'hidden':null} r="40" cx='50' cy='50' fill="transparent" stroke="lightseagreen" strokeWidth="12px" strokeLinecap="round" strokeDasharray="252px" filter="url(#drop-shadow)" ></circle>
              </svg>
              <h1 className='text-2xl font-medium text-white'>{tasks.filter((e) => e.complete).length
              }/{tasks.length}</h1>
            </div>
          </div>
          <form onSubmit={submitHandler} className='w-2/3 flex items-center gap-2 rounded-full border p-2'>
            <input required onChange={(e) => setinput(e.target.value)} value={input} type="text" placeholder='Task' className='px-2 text-xl outline-none text-white py-1 bg-transparent  w-full ' />
            <button className='bg-zinc-900 rounded-full px-2 aspect-square text-2xl text-white font-black flex items-center justify-center'><i className="ri-add-line"></i></button>
          </form>
        </div>
        <div className="right w-1/3 max-h-[90%] flex flex-col items-center justify-center gap-4">
          <h1 className='text-white w-full text-3xl font-medium mb-4'>Tasks</h1>
          <div className="tasks w-full text-white">
            <div className="flex flex-col gap-2 h-[52.5vh] overflow-y-auto py-1">
              {tasks.length > 0 ? (
                tasks.map((e, i) => (
                  <div key={e.id} className="task cursor-pointer flex items-center border rounded-full px-4 py-3 gap-3">
                    <i onClick={() => taskCheck(i)} className={`ri-circle-${e.complete ? 'fill' : 'line'} text-cyan-300 mt-1`}></i>
                    <h1 className={`text-white text-xl w-full ${e.complete ? 'line-through' : ''} `}>{e.task}</h1>
                    <i onClick={() => deleted(i)} className='ri-close-line ml-auto'></i>
                  </div>
                ))
              ) : (
                <h1 className='text-3xl'>No Tasks added</h1>
              )}

            </div>
          </div>

        </div>



      </div>
    </>
  )
}

export default App