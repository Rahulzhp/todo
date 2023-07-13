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
        <div className='Addtodo'>
            <form onSubmit={handleFormsubmit}>
                <div>
                    <p>Title</p>
                    <input type="text" placeholder='enter title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div>
                    <p>Description</p>
                    <textarea placeholder='enter Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Addtodo