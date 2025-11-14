import React, { useEffect, useState } from 'react'
import Input from './Input'
import List from './List'
import axios from 'axios'

function Main() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/api/v1/user/read")
            setData(response.data)
        }
        fetchData()
    }, [])

    console.log(data);
    

    return (
        <div className='min-h-screen w-full flex flex-col justify-center items-center bg-[#edeae1] gap-10 py-7 '>
            <Input />
            <List />
        </div>

    )
}

export default Main