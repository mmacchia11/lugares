import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "obteniendo Tareas....",
  });
}

export function POST() {
  return NextResponse.json({
    message: "creando Tareas....",
  });
}
