"use client"
import Link from 'next/link'
import { useSearchParams } from "next/navigation"

const Navabar = () => {
    const searchparams = useSearchParams()
    const todoFilter = searchparams.get("todos")
    return (
        <div className='navbar'>
            <div>
                <h1>Task Management Application</h1>
            </div>
            <nav>
                <Link href="/" className={todoFilter === null ? "active" : ""}>To Do</Link>
                <Link href="/?todos=active" className={todoFilter === "active" ? "active" : ""}>In Progress</Link>
                <Link href="/?todos=complete" className={todoFilter === "complete" ? "active" : ""}>Completed</Link>
            </nav>
        </div>
    )
}

export default Navabar