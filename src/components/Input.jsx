import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function Input() {
    const [text,setText] = useState("")
    const dispatch = useDispatch()

    const addClickHandler = () => {
        if(text.length > 0){
            dispatch(addTodo({ text: text }))
            setText("")
        }
    }
  return (
    <>
    <div className='h-[25%] w-[70%] bg-[#1b2651]  flex flex-col justify-around items-center rounded-3xl shadow-2xl gap-5 py-4 '>
            <h1 className='text-white font-bold text-4xl'>Todo App</h1>
            <div className='w-[80%] bg-[#1b2651] flex justify-between m-auto rounded-2xl flex-col sm:flex-row sm:bg-white sm:gap-0 gap-2 items-center'>
                <input 
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text" 
                placeholder='What needs to be done?' 
                className='sm:w-[85%] w-[100%] bg-white text-gray-600 border-none focus:outline-none focus:ring-0 p-4 rounded-xl'/>
                <button 
                onClick={() => addClickHandler()}
                className="bg-[#166c96] hover:bg-white hover:duration-200 hover:font-bold hover:scale-y-102 hover:text-[#166c96] text-white font-semibold py-1 px-5 sm:w-auto w-30 rounded-xl sm:rounded-l-none">Add Task+</button>
            </div>
        </div>
    </>
  )
}

export default Input