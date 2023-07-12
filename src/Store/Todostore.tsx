"use client"
import { useContext, useState, createContext, ReactNode } from "react";

export type Todo = {
    id: String;
    title: String;
    description: String
    completed: boolean;
    createdAt: Date
}
export type TodoContext = {
    todos: Todo[];
    handleAddTodo: (title: String, description: String) => void
    toggleTodo: (id: any) => void
    handleDelte: (id: any) => void
}

export const todoContext = createContext<TodoContext | null>(null)


export const TodosProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const newTodos = localStorage.getItem("todos") || "[]";
        return JSON.parse(newTodos) as Todo[];
    })
    const handleAddTodo = (title: String, description: String) => {

        setTodos((prev: any): any => {
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                title,
                description,
                completed: false,
                createdAt: new Date()
            },
            ...prev
            ]
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos
        })
    }

    const toggleTodo = (id: String) => {
        setTodos((prev: any): any => {
            const newTodos: Todo[] = prev.map((el: any) => {
                if (el.id === id) {
                    return { ...el, completed: !el.completed }
                }
                return el
            })
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos
        })
    }
    const handleDelte = (id: String) => {
        setTodos((prev: any): any => {
            const newTodos: Todo[] = prev.filter((el: any) => el.id !== id)
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos
        })
    }

    return (
        <todoContext.Provider value={{ todos, handleAddTodo, toggleTodo, handleDelte }}>
            {children}
        </todoContext.Provider>
    )
}

export function useTodos() {
    const todosContextvalue = useContext(todoContext)
    if (!todosContextvalue) {
        throw new Error("useTodo used outside provider")

    }
    return todosContextvalue

}
