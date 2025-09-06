import React from 'react'
import Input from './Input'
import List from './List'

function Main() {
    return (
        <div className='min-h-screen w-full flex flex-col justify-center items-center bg-[#edeae1] gap-10 py-7 '>
            <Input />
            <List />
        </div>

    )
}

export default Main