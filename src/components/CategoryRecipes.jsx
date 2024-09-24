import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CategoryRecipes.css'; // Neue CSS-Datei für Kategorien-Rezepte

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
      <div className="recipe-list">
        {recipes.map(recipe => (
          <div className="recipe-card" key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h3>{recipe.strMeal}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryRecipes;
