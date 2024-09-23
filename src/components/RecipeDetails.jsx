import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <div className="recipe-details">
      {recipe ? (
        <>
          <h2>{recipe.strMeal}</h2>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>Zutaten</h3>
          <ul>
            {Object.keys(recipe)
              .filter(key => key.startsWith('strIngredient') && recipe[key])
              .map(key => (
                <li key={key}>{recipe[key]}</li>
              ))}
          </ul>
          <h3>Anweisungen</h3>
          <p>{recipe.strInstructions}</p>
        </>
      ) : (
        <p>Wird geladen...</p>
      )}
    </div>
  );
}

export default RecipeDetails;
