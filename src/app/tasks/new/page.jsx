import React from 'react'

function FormPage() {
  return (
    <div className='h-[calc(100vh-7rem)] flex flex-col  justify-center items-center'>
        <form className='flex flex-col '>
            <input type="text" name="nombre" placeholder='Nombre' 
            className='bg-gray-800 border-2 w-full p-4 rounded-lg'/>
            <textarea name="description" id="" cols="30" rows="5" placeholder='Descripción' className='bg-gray-800 border-2 w-full p-4 rounded-lg'
            ></textarea>
            <input type="category" name="nombre" placeholder='Categoria' className='bg-gray-800 border-2 w-full p-4 rounded-lg' />
            <input type="instagram" name="nombre" placeholder='Instagram' className='bg-gray-800 border-2 w-full p-4 rounded-lg'/>
            <input type="barrio" name="nombre" placeholder='Barrio' className='bg-gray-800 border-2 w-full p-4 rounded-lg'/>
            <input type="direccion" name="nombre" placeholder='Direccion' className='bg-gray-800 border-2 w-full p-4 rounded-lg'/>
            <button
            className='bg-fuchsia-900 text-white font-bold px-2 py-4 rounded-lg border-2'>
              Guardar
            </button>
        </form>
    </div>
  )
}

export default FormPage