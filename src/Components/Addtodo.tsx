"use client"
import React, { FormEvent, useState } from 'react'
import { useTodos } from '@/Store/Todostore'

function Addtodo() {
    const [title, setTitle] = useState("")
    const { handleAddTodo } = useTodos()
    const [description, setDescription] = useState("")

    const handleFormsubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleAddTodo(title, description)
        setTitle('');
        setDescription('');

    }
    return (
        <div>
            <form onSubmit={handleFormsubmit}>
                <p>Title</p>

                <input type="text" placeholder='enter title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <p>Description</p>

                <input type="text" placeholder='enter Description' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <br></br>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Addtodo