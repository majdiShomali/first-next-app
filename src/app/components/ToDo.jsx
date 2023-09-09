"use client"
import React, { useEffect, useState } from 'react'

const ToDo = () => {
const [toDo,setToDo]=useState({})
    useEffect(()=>{
        const getTodo = async()=>{
            const response = await  fetch('https://jsonplaceholder.typicode.com/todos/1')
            const toDo= await response.json()
            setToDo(toDo)
        }
        getTodo()
    },[])
  return (
    <div>{toDo?.title} from client component</div>
  )
}

export default ToDo