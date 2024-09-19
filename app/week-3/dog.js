export default function Dog({ name, breed, age, color }) {
    //export default function Dog({ name, breed, age, color }) { <-- 
    //below would be the beginner way to do this. 

    //let name = props.name;
    //let breed = props.breed;
    //let age = props.age;
    //let color = props.color;

    
    return (
        <section className="m-2">
            <h2 className="text-green-600 font-bold"> {props.name}</h2>
        <p>Breed: {props.breed}</p>
        <p>Age: {props.age}</p>
        <p>Color: {props.color}</p>
    </section>
    )
}