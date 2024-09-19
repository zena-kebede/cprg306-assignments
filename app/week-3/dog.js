export default function Dog(props) {
    return (
        <section className="m-2">
            <h2 className="text-green-600 font-bold"> {props.name}</h2>
        <p>Breed: {props.breed}</p>
        <p>Age: {props.age}</p>
        <p>Color: {props.color}</p>
    </section>
    )
}