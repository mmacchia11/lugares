import React from 'react'

function TaskCard({task}) {
  return (
    <div className='bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700' >
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>{task.category}</p>
      <p>{task.instagram}</p>
      <p>{task.barrio}</p>
      <p>{task.direccion}</p>
    </div>
  )
}

export default TaskCard