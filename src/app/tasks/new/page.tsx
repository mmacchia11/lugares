"use client"
import { set } from 'mongoose';
import {ChangeEvent,FormEvent,useState, useEffect} from 'react'
import { useRouter, useParams  } from 'next/navigation';



function FormPage() {

  const [newTask, setNewTask] = useState( {
      nombre: '',
      description: '',
      category: '',
      instagram: '',
      barrio: '',
      direccion: ''
    
  });
  const router = useRouter()
  const params = useParams()

  const getTask = async () => {
    const res =  await fetch(`/api/tasks/${params.id}`)
    const data = await res.json()
    //const dato = data.taskFound
    console.log(data)
    setNewTask({
      nombre: data.nombre,
      description: data.description,
      category: data.category,
      instagram: data.instagram,
      barrio: data.barrio,
      direccion: data.direccion

    })
  }

  const createTasks = async () => {

    try{
      const res = await fetch('/api/tasks',{
        method:"POST",
        body: JSON.stringify(newTask),
        headers: {
          "Content-type": "application/json"
        }
        })
        const data = await res.json();
        if(res.status === 200){
          router.push('/')
          router.refresh()
        }

        console.log(data);
    }catch(error){
      console.log(error)
    }
  }

  const updateTask = async () => {
    

  }

  const handlerDelete =async () => {
    if(window.confirm("Estas seguro de quere eliminar la tarea??")){
    try{
      const res =await  fetch(`/api/tasks/${params.id}`,{
        method:"DELETE"
      })
      router.push('/')
      router.refresh()
    }catch(error){
      console.log(error)
    }
    }
  }
  
  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if(!params.id){
      await createTasks();
    }else{
      console.log('update')
    }

  }
  const handleChange = (
    e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setNewTask({...newTask, [e.target.name]: e.target.value})

  useEffect(() => {
    if(params.id){
      getTask()
    }
  },[])

  return (
    <div className='h-[calc(100vh-7rem)] flex flex-col justify-center items-center'>
        <form
         onSubmit={handlerSubmit}
         className='flex flex-col gap-2 mt-10'
         >

          <header className='flex justify-between items-center'>

            <h1 className='font-bold text-3xl'>
              {
                !params.id ? 'Nuevo Lugar' : 'Editar Lugar' 
              }
            </h1>
            <button
            type='button'
            className='bg-red-500 text-white font-bold px-3 py-1 rounded-md'
            onClick={handlerDelete}
            >
              Borrar
            </button>
          </header>
            <input type="text" name="nombre" placeholder='Nombre' 
            className='bg-gray-800 border-2 w-full p-4 rounded-lg'
            onChange={handleChange}
            value={newTask.nombre}
            />
            <textarea name="description" cols={30} rows={5} placeholder='Descripción' className='bg-gray-800 border-2 w-full p-4 rounded-lg'
            onChange={handleChange}
            value={newTask.description}
            ></textarea>
            <input type="text" name="category" placeholder='Categoria' className='bg-gray-800 border-2 w-full p-4 rounded-lg'
            onChange={handleChange}
            value={newTask.category}
            />
            <input type="text" name="instagram" placeholder='Instagram' className='bg-gray-800 border-2 w-full p-4 rounded-lg'
            onChange={handleChange}
            value={newTask.instagram}
            />
            <input type="text" name="barrio" placeholder='Barrio' className='bg-gray-800 border-2 w-full p-4 rounded-lg'
            onChange={handleChange}
            value={newTask.barrio}
            />
            <input type="text" name="direccion" placeholder='Direccion' className='bg-gray-800 border-2 w-full p-4 rounded-lg'
            onChange={handleChange}
            value={newTask.direccion}
            />
            <button
            type='submit'
            className='bg-fuchsia-900 text-white font-bold px-2 py-4 rounded-lg border-2'>
              {
                !params.id ? 'Crear' : 'Editar'
              }
            </button>
        </form>
    </div>
  )
}

export default FormPage