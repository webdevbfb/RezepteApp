import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Laden von Rezepten, die mit 'a' beginnen
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(response => response.json())
      .then(data => setRecipes(data.meals));
  }, []);

  return (
    <div className="home">
      <h2>Rezepte, die mit 'A' beginnen</h2>
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

export default Home;
