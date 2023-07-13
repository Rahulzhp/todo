"use client"
import { useContext, useState, createContext, ReactNode, useEffect } from "react";

export type Todo = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
};

export type TodoContext = {
    todos: Todo[];
    handleAddTodo: (title: string, description: string) => void;
    toggleTodo: (id: string) => void;
    handleDelete: (id: string) => void;
};

export const todoContext = createContext<TodoContext | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const handleAddTodo = (title: string, description: string) => {
        const newTodo: Todo = {
            id: Math.random().toString(),
            title,
            description,
            completed: false,
            createdAt: new Date(),
        };

        setTodos((prevTodos) => {
            const newTodos = [newTodo, ...prevTodos];
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        });
    };

    const toggleTodo = (id: string) => {
        setTodos((prevTodos) => {
            const newTodos = prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        });
    };

    const handleDelete = (id: string) => {
        setTodos((prevTodos) => {
            const newTodos = prevTodos.filter((todo) => todo.id !== id);
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        });
    };

    return (
        <todoContext.Provider value={{ todos, handleAddTodo, toggleTodo, handleDelete }}>
            {children}
        </todoContext.Provider>
    );
};

export function useTodos() {
    const todosContextValue = useContext(todoContext);
    if (!todosContextValue) {
        throw new Error("useTodos used outside provider");
    }
    return todosContextValue;
}
