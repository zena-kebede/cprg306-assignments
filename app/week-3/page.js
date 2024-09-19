import Dog from "./dog";

export default function Page() {
    let dog1 = {
        name: "Johnny",
        breed: "Bengal",
        age: "4",
        color: "Tan Striped"
    }
}

return (
    <main className="ml-4">
        <h1 className="text-2xl font-bold"> Week 3 Demo </h1>
        <Dog 
        name={dog1.name}
        breed={dog1.breed}
        age={dog1.age}
        color={dog1.color}
        />
    </main>
)