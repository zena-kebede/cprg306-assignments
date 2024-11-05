import React, { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (ingredient) {
            setLoading(true);
            setSelectedMeal(null); // Reset selected meal when ingredient changes
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
                .then((response) => response.json())
                .then((data) => {
                    setMeals(data.meals || []);
                    setLoading(false);
                })
                .catch(() => {
                    setMeals([]);
                    setLoading(false);
                });
        }
    }, [ingredient]);

    const handleMealClick = (mealId) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then((response) => response.json())
            .then((data) => {
                setSelectedMeal(data.meals[0]); // Set selected meal details
            });
    };

    const renderIngredients = () => {
        if (!selectedMeal) return null;

        // Extract ingredients and measurements
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = selectedMeal[`strIngredient${i}`];
            const measure = selectedMeal[`strMeasure${i}`];
            if (ingredient) {
                ingredients.push(`${ingredient} (${measure})`);
            }
        }

        return (
            <div className="p-4 bg-gray-800 text-white rounded-lg mt-2">
                <h3 className="text-lg font-bold mb-2">{selectedMeal.strMeal}</h3>
                <p className="font-semibold">Ingredients needed:</p>
                <ul className="list-disc ml-5">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        );
    };

    if (loading) {
        return <p>Loading meal ideas...</p>;
    }

    return (
        <div>
            <h2>Meal Ideas</h2>
            <p>Here are some meal ideas using {ingredient}:</p>
            <ul className="list-none p-0">
                {meals.map((meal) => (
                    <li 
                        key={meal.idMeal} 
                        className="p-2 bg-gray-700 text-white rounded-lg cursor-pointer mb-2 hover:bg-green-600"
                        onClick={() => handleMealClick(meal.idMeal)}
                    >
                        {meal.strMeal}
                        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "100px", height: "100px" }} />
                        
                        {/* Show ingredients directly below the selected meal */}
                        {selectedMeal && selectedMeal.idMeal === meal.idMeal && renderIngredients()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;
