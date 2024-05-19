import {React,useRef,useContext} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { taskcontext } from '../context/TaskContext'


const Header = () => {
    const [tasks,setTasks] = useContext(taskcontext)

    const circle = useRef(null);
    useGSAP(() => {
        gsap.to(circle.current, {
            strokeDashoffset: 252 * ((100 - (tasks.filter((e) => e.complete === true).length / tasks.length) * 100) / 100) + 'px'
        })
    }, [tasks])

    return (
        <>
            <div className="head w-2/3 h-[35vh] bg-zinc-900 rounded-xl py-6 flex gap-4 items-center justify-center">
                <h1 className='text-3xl text-white font-medium'>Progress</h1>
                <div className="progress w-1/2 h-full flex items-center justify-center relative">
                    <svg width="100%" height="100%" className='absolute ' viewBox="0 0 100 100">
                        <filter id="drop-shadow" >
                            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="lightseagreen" floodOpacity="0.3" />
                        </filter>
                        <circle r="40" cx='50' cy='50' fill="transparent" stroke="#e0e0e0" strokeWidth="12px"></circle>
                        <circle ref={circle} hidden={tasks.length === 0 ? 'hidden' : null} r="40" cx='50' cy='50' fill="transparent" stroke="lightseagreen" strokeWidth="12px" strokeLinecap="round" strokeDasharray="252px" filter="url(#drop-shadow)" ></circle>
                    </svg>
                    <h1 className='text-2xl font-medium text-white'>{tasks.filter((e) => e.complete).length
                    }/{tasks.length}</h1>
                </div>
            </div>
        </>
    )
}

export default Header