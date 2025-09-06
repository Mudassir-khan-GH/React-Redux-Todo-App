import React,{useState} from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

function List() {
    const tasks = useSelector((state) => state.todo.value)
    let count = 0;
     tasks.map((task) => { if(task.completed === false) count++;})
   
    
  return (
    <div className='md:w-[70%] sm:w-[80%] w-[85%] bg-white rounded-3xl shadow-2xl flex flex-col gap-3'>
        <div className='h-18 w-full bg-[#1b2651] rounded-t-3xl flex flex-col justify-center items-center py-3'>
            <h1 className='text-white text-3xl font-semibold'>Tasks to do</h1>
            <h3 className='text-white text-xl font-normal'>({count} Remaining)</h3>
        </div>
        {(tasks.length === 0) ? <h1 className='text-gray-400 font-semibold py-4 mx-auto text-xl'>No Tasks yet.</h1> :tasks.map((task) => <Task key={task.id} task={task} />)} 
    </div>
  )
}

export default List