import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CategoryRecipes() {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => response.json())
      .then(data => setRecipes(data.meals));
  }, [category]);

  return (
    <div className="category-recipes">
      <h2>Rezepte in der Kategorie: {category}</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h3>{recipe.strMeal}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryRecipes;
