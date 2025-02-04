export default function Card({name, classification, price, description}) {
    return (
        <div>
                <h1>{name}</h1>
                <h1>{classification}</h1>
                <h1>{price}</h1>
                <span>{description}</span>

        </div>
    )
}