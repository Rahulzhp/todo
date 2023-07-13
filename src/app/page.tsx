"use client"
import Addtodo from '@/Components/Addtodo'
import Navabar from '@/Components/Navabar'
import Todos from '@/Components/Todos'
import Image from 'next/image'




export default function Home() {

  return (
    <div>
      <Navabar />
      <Addtodo />
      <Todos />
    </div>
  )
}
