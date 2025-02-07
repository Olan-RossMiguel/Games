import Navbar from '@/Components/Navbar';
import Card from '@/Components/Card';

export default function Index({games}){
    return (
        <>
        <Navbar></Navbar>
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
