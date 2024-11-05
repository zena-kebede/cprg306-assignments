import React, { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (ingredient) {
            setLoading(true);
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

    if (loading) {
        return <p>Loading meal ideas...</p>;
    }

    return (
        <div>
            <h2>Meal Ideas with {ingredient}</h2>
            {meals.length > 0 ? (
                <ul>
                    {meals.map((meal) => (
                        <li 
                            key={meal.idMeal}
                            style={{
                                cursor: 'pointer', // Make cursor pointer for better UX
                                padding: '8px',
                                transition: 'background-color 0.3s', // Smooth transition effect
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#88dc9e'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            <h3>{meal.strMeal}</h3>
                            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "100px", height: "100px" }} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No meal idea found for {ingredient}</p>
            )}
        </div>
    );
};

export default MealIdeas;
