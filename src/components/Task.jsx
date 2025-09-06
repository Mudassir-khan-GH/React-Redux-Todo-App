import  React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, updateTodo ,toggleCompleted } from '../features/todo/todoSlice'

function Task({ task }) {

    const [checkbox , setCheckbox] = useState(true)
    const [editBtn, setEditBtn] = useState(true)
    const [completed , setCompleted] = useState(task.completed)
    const [text, setText] = useState(task.text)
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useDispatch()

    const deleteClickHandler = () => {
        dispatch(removeTodo({ id: task.id }))
    }


    const editClickHandler = (id) => {
        if(editBtn === true){
        if (isEditing == false) {
            setIsEditing(true)
        } 
        if (isEditing) {
            dispatch(updateTodo({ id: task.id, text: text }))
            setIsEditing(false)
        }
    }
    }

    const toggleCompletedHandler = () => {
        if(completed === false){
            dispatch(toggleCompleted({ id: task.id }))
            setEditBtn(false)
            setCompleted(true)
        }
    }




    return (
        <div className= {`h-17 w-[95%] sm:w-[93%] my-3 mx-auto ${completed ? 'border-[#166c96]' : 'border-gray-200'} border-3 bg-white rounded-2xl px-3`}>
            <div className='flex justify-between items-center '>
                <div className="flex items-center p-2">
                    <input
                        checked={completed}
                        onChange={() => toggleCompletedHandler()}
                        type="checkbox"
                        className={`appearance-none rounded-lg w-5 h-5 border-2 border-gray-400 checked:bg-[#166c96] mr-3`} />
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        id= {`input-${task.id}`}
                        readOnly = {isEditing? false : true}
                        className={`${completed ? 'line-through' : ''} bg-white text-[18px] w-[40vw] text-[#166c96] border-none focus:outline-none focus:ring-0 p-2 rounded-xl`}
                        type="text"
                    />
                </div>
                <div className="flex gap-1.5 pr-3">
                    <button
                        onClick={() => editClickHandler(task.id)}  
                        id={`editBtn-${task.id}`}
                        className={`bg-[#166c96] ${completed ? 'bg-gray-500' : ''} ${!isEditing ? 'bg-[#166c96]' : 'bg-green-700' } md:px-3 sm:px-2 px-1.5 text-white rounded-lg text-[12px] sm:text-[16px] py-0.5`}
                    >
                       {!isEditing ?  "Edit" : "Save"}
                    </button>

                    <button
                        onClick={() => deleteClickHandler()}
                        className="bg-[#cd2028] md:px-3 sm:px-2 px-1.5 text-white rounded-lg text-[12px] sm:text-[16px] py-0.5"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Task




















