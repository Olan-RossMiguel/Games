import Card from '@/Components/Card';
import Navbar from '@/Components/Navbar';
import { Link } from "@inertiajs/react";

export default function Index({ games }) {
    return (
        <>
            <Navbar></Navbar>
            <section className="grid grid-cols-3 gap-10 p-20">
            {games?.map((game) => (
                <Card
                    key={game.id}
                    name={game.name}
                    classification={game.classification}
                    price={game.price}
                    description={game.description}
                    image={game.image}
                    link={route('games.show', game.id)}
                />
            ))}
            </section>
            <div>Hay {Object.keys(games).length} en la base de datos.</div>
        </>
    );
}
