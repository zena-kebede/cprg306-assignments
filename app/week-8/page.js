"use client";

import { useState, useEffect } from "react";

export default function Page() {
    const [randomDogUrl, setRandomDogUrl] = useState(null);

    const getRandomDog = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json(); //adding await so that the return message is what is promised.
        //const data = response.json(); //this is a promise and not the actual data
        const url = data.message;
        setRandomDogUrl(url);
    }

    useEffect(() => {
        getRandomDog();
    }, []); //empty array means this will run once

    return (
        <div>
            <h1>Week 8</h1>
            <p><img src={randomDogUrl}/></p>
        </div>
    );
}