import Link from "next/link"

function NavBar() {
  return (
    <nav className="bg-gray-950 py-5 mb-20">
        <div className="container flex justify-between px-10 mx-auto">
            <Link href="/">
            <h1 className="text-2xl font-bold">Lugares</h1>
            </Link>
        
            <ul className="flex gap-x-4"> 
                <li>
                    <Link href="/tasks/new">Nuevo Lugar</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar