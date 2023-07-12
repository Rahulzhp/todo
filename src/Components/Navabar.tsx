"use client"
import Link from 'next/link'
import { useSearchParams } from "next/navigation"

const Navabar = () => {
    const searchparams = useSearchParams()
    return (
        <nav>
            <Link href="/">TodoList</Link>
            <Link href="/?todos=active">Active</Link>
        </nav>
    )
}

export default Navabar