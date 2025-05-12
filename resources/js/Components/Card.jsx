import { Link } from "@inertiajs/react";

export default function Card({name, classification, price, description, image, link}) {
    return (
        <div className="n-full rounded-lg bg-neutral-900">
            <img className="h-40 object-cover"
            src = {"storage/"+image} alt="imagen"
            />
            <div className="p-8">
                <h1 className="text-lx font-bold text-white">{name}</h1>
                <h1 className="text-lg text-neutral-300">{classification}</h1>
                <h1 className="text-lg text-neutral-200">{price}</h1>
                <span className="line-clamp-2 text-white">{description}</span>
                <Link href={link} className="rounded-lg bg-white p-4 ">Ver mas...</Link>
                </div>
                
                
                

        </div>
    )
}