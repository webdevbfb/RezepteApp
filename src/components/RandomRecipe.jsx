import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RandomRecipe() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => setRecipe(data.meals[0]));
  }, []);

  return (
    <div className="random-recipe">
      {recipe ? (
        <>
          <h2>Zufälliges Rezept: {recipe.strMeal}</h2>
          <Link to={`/recipe/${recipe.idMeal}`}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
          </Link>
        </>
      ) : (
        <p>Wird geladen...</p>
      )}
    </div>
  );
}

export default RandomRecipe;
