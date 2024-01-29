import { NextResponse } from "next/server";
import { connectDB } from "../../../../utils/mongoose";
import Task from "../../../../models/Task";


export async function GET(request, {params}){
  try{
    connectDB()
  const taskFound = await Task.findById({_id: params.id})

  if(!taskFound) return NextResponse.json({
      message: 'no se encontro la tarea'
    }, {
      status:404
    })
      return NextResponse.json(taskFound)
  }catch(error){
    return NextResponse.json(error.message,  {status:404})
  }
}


export async function DELETE(request, {params}){
  try{
    const taskDelete = await Task.findByIdAndDelete(params.id)
    if(!taskDelete) 
    return NextResponse.json({
      message: 'no se encontro la tarea'
    },{
      status:404
    })
    return NextResponse.json(taskDelete)
  }catch(error){
    return NextResponse.json(error.message,  {status:404})
  }
 
}

export async function PUT(request, {params}){
  try{
    const data = await request.json()
  console.log(data)
  const taskupdate = await Task.findByIdAndUpdate(params.id, data,
    { new: true})

  return NextResponse.json(taskupdate )
  }catch(error){
    return NextResponse.json(error.message,  {status:404})
  }
}

