"use client";

//Step 1: import necessary hooks
import { useState, useEffect } from "react";

const removeEmojis = (text) => {
    return text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
  };

//Step 3: define the API fetching function
const fetchMealIdeas = async (ingredient) => {
    const realIngredient = removeEmojis(ingredient); //removes emojis from the ingredient name
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${realIngredient}`);
    const data = await response.json();
    return data.meals || []; // this returns a list of meals OR an empty array if none are found.
}  

export default function MealIdeas({ ingredient }) {
    //Step 2: define state variables
    const [meals, setMeals] = useState([]);

    //Step 4: define the loadMealIdeas function
    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    };

    //Step 5: useEffect to load meals when the ingredient changes
    useEffect(() => {
        if (ingredient) {
            fetchMealIdeas(ingredient).then(setMeals);
        }
    }, [ingredient]);

    //Step 6: Render the component 
    return (
        <div>
            <h2>Meal Ideas with {ingredient}</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <h3>{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "100px", height: "100px"}} />
                    </li>
                ))}
            </ul>
        </div>
    );

}