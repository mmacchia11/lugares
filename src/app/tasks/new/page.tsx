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

  const createRasks = async () => {

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
  
  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createRasks();

  }
  const handleChange = (
    e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setNewTask({... newTask, [e.target.name]: e.target.value})

  useEffect(() => {
    console.log(params)
  },[])

  return (
    <div className='h-[calc(100vh-7rem)] flex flex-col  justify-center items-center'>
        <form
         onSubmit={handlerSubmit}
         className='flex flex-col gap-2'
         >
          <h1 className='font-bold text-3xl'>
            {
              !params.id ? 'Nuevo Lugar' : 'Editar Lugar' 
            }
          </h1>
            <input type="text" name="nombre" placeholder='Nombre' 
            className='bg-gray-800 border-2 w-full p-4 rounded-lg'
            onChange={handleChange}
            />
            <textarea name="description" id="" cols={30} rows={5} placeholder='Descripción' className='bg-gray-800 border-2 w-full p-4 rounded-lg'
            onChange={handleChange}
            ></textarea>
            <input type="text" name="category" placeholder='Categoria' className='bg-gray-800 border-2 w-full p-4 rounded-lg'
            onChange={handleChange}
            />
            <input type="text" name="instagram" placeholder='Instagram' className='bg-gray-800 border-2 w-full p-4 rounded-lg'
            onChange={handleChange}
            />
            <input type="text" name="barrio" placeholder='Barrio' className='bg-gray-800 border-2 w-full p-4 rounded-lg'
            onChange={handleChange}
            />
            <input type="text" name="direccion" placeholder='Direccion' className='bg-gray-800 border-2 w-full p-4 rounded-lg'
            onChange={handleChange}
            />
            <button
            className='bg-fuchsia-900 text-white font-bold px-2 py-4 rounded-lg border-2'>
              Guardar
            </button>
        </form>
    </div>
  )
}

export default FormPage