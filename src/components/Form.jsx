import {React,useState,useContext} from 'react'
import { nanoid } from 'nanoid'
import { taskcontext } from '../context/TaskContext'


const Form = () => {

    const [tasks,setTasks] = useContext(taskcontext)
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


  return (
    <>
       <form onSubmit={submitHandler} className='w-2/3 flex items-center gap-2 rounded-full border p-2'>
            <input required onChange={(e) => setinput(e.target.value)} value={input} type="text" placeholder='Task' className='px-2 text-xl outline-none text-white py-1 bg-transparent  w-full ' />
            <button className='bg-zinc-900 rounded-full px-2 aspect-square text-2xl text-white font-black flex items-center justify-center'><i className="ri-add-line"></i></button>
          </form>
    </>
  )
}

export default Form