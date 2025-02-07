import { Link } from "@inertiajs/react";


export default function Navbar() {
  return (
    <div className="p-8 bg-black text-white font-bold">
      
      <Link className="p-8 hover:text-yellow-500 " href="/games">Juegos</Link>
      <Link className="p-8 hover:text-yellow-500 " href="/movies">Peliculas</Link>
      <Link className="p-8 hover:text-yellow-500 " href="/songs">Canciones</Link>
      
    </div>
  )
}
