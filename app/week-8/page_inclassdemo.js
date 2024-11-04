"use client";

import { useState, useEffect } from "react";

export default function Page() {
    const [randomDogUrl, setRandomDogUrl] = useState(null);
    const [dogBreeds, setDogBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState("");

    {/**const getRandomDog = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json(); //adding await so that the return message is what is promised.
        //const data = response.json(); //this is a promise and not the actual data
        const url = data.message;
        setRandomDogUrl(url);
    };
    */}

    const getRandomDog = async (breed) => {
        const response = breed ? // is there a breed?
        await fetch(`https://dog.ceo/api/breed/${breed}/images/random`) // if there is a breed, then do this line
        : await fetch("https://dog.ceo/api/breeds/image/random"); //otherwise or else, do this line instead.
        const data = await response.json(); 
        const url = data.message; //convert to an object
        setRandomDogUrl(url);
    };

    const getDogBreeds = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breeds = Object.keys(data.message); //Object.keys returns an array of the object's keys
        setDogBreeds(breeds);
    };

    const handleBreedChange = (event) => {
        setSelectedBreed(event.target.value);
    };

    useEffect(() => {
        getRandomDog();
        getDogBreeds();
    }, []); //empty array means this will run once

    useEffect(() => {
        if (selectedBreed === "") return;
        getRandomDog(selectedBreed);
    }, [selectedBreed]); //run when selectedBreed changes

    return (
        <div>
            <h1>Week 8</h1>
            <div>
                <select onChange={handleBreedChange}>
                    {dogBreeds.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
            </div>
            <p><img src={randomDogUrl}/></p>
        </div>
    );
}