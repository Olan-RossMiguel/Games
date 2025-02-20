import Navbar from '@/Components/Navbar';
import Card from '@/Components/Card';
import { Link } from '@inertiajs/react';

import Create from '@/Pages/Games/Create';

export default function Index({games}){
    return (
        <>
        <Navbar></Navbar>
        <Link href={route('games.create')} className='p-4 bg-black text-white rounded-lg' >Crear nuevo</Link>
        {games?.map((game) => (
            <Card 
            key={game.id} 
            name={game.name}
            classification={game.classification}
            price={game.price}
            description={game.description}/>
            
        ))}
        <div>Hay {Object.keys(games).length} en la base de datos.

        </div>
</>
    );
}
