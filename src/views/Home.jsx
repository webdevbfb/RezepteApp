import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Neue CSS-Datei für die Startseite

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
      <div className="recipes-grid">
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

export default Home;
