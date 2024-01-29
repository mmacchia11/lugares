import React from 'react'
import Link from 'next/link'

function TaskCard({task}) {
  return (
  <Link href={`/tasks/${task._id}`}>
    <div className='bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700' >
      <h3 className='text-2xl font-bold'>{task.nombre}</h3>
      <p className='text-slate-300'>{task.description}</p>
      <p className='text-slate-300'>{task.category}</p>
      <p className='text-slate-300'>{task.instagram}</p>
      <p className='text-slate-300'>{task.barrio}</p>
      <p className='text-slate-300'>{task.direccion}</p>
    </div>
    </Link>
  )
}

export default TaskCard