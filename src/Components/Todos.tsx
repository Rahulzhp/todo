"use client"
import { useTodos, Todo } from '@/Store/Todostore'
import { useSearchParams } from 'next/navigation'
import { AiFillDelete } from 'react-icons/ai';
import React from 'react'

const Todos = () => {
    const { todos, toggleTodo, handleDelete } = useTodos()

    const searchparams = useSearchParams()
    const todoFilter = searchparams.get("todos")
    console.log(todos)
    let Filtertodos: Todo[] = todos

    if (todoFilter === "active") {
        Filtertodos = Filtertodos.filter((el) => !el.completed)
    }
    else if (todoFilter === "complete") {
        Filtertodos = Filtertodos.filter((el) => el.completed)
    }
    return (
        <div className='todos'>
            <div>
                {
                    Filtertodos.map((el: Todo) => {
                        return <div className='todoItem' key={el.id.toString()}>
                            <div>
                                <input type="checkbox" id={`el-${el.id}`} checked={el.completed} onChange={() => toggleTodo(el.id)}></input>
                            </div>
                            <div id='title'>
                                <div><h1>Title : <span>{el.title}</span> </h1></div>
                                <div><p>Description: <span>{el.description}</span></p></div>
                            </div>
                            <div>
                                {
                                    el.completed && <div onClick={() => handleDelete(el.id)}><AiFillDelete /></div>
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Todos