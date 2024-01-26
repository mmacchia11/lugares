import React from 'react'
import Link from 'next/link'

function TaskCard({task}) {
  return (
  <Link href={`/tasks/${task._id}`}>
    <div className='bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700' >
      <h3>{task.nombre}</h3>
      <p>{task.description}</p>
      <p>{task.category}</p>
      <p>{task.instagram}</p>
      <p>{task.barrio}</p>
      <p>{task.direccion}</p>
    </div>
    </Link>
  )
}

export default TaskCard