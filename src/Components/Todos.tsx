"use client"
import { useTodos, Todo } from '@/Store/Todostore'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Todos = () => {
    const { todos, toggleTodo, handleDelte } = useTodos()

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
        <div>
            <ul>
                {
                    Filtertodos.map((el: Todo) => {
                        return <li key={el.id.toString()}>
                            <input type="checkbox" id={`el-${el.id}`} checked={el.completed} onChange={() => toggleTodo(el.id)}></input>
                            <label>{el.title}</label>
                            {
                                el.completed && (<button onClick={() => handleDelte(el.id)}>Delete</button>)
                            }
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todos