import {React,useContext} from 'react'
import { taskcontext } from '../context/TaskContext'


const Show = () => {
    const [tasks,setTasks] = useContext(taskcontext)
    
  function taskCheck(index) {
    const copytask = [...tasks];
    copytask[index].complete = !copytask[index].complete;
    setTasks(copytask);
    localStorage.setItem('tasks', JSON.stringify(copytask));
  }


  const deleted = (index) => {
    const copytask = [...tasks];
    copytask.splice(index, 1);
    setTasks(copytask);
    localStorage.setItem('tasks', JSON.stringify(copytask));
  }

  return (
    <>
     <h1 className='text-white  mt-10 lg:mt-4 w-full text-3xl font-medium mb-4'>Tasks</h1>
          <div className="tasks w-full text-white">
            <div className="flex flex-col gap-2 mb-6 lg:h-[52.5vh] lg:overflow-y-auto py-1">
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

    </>
  )
}

export default Show