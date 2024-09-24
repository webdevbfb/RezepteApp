import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import './Search.css'; // Neue CSS-Datei für die Suchergebnisse

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => {
          setRecipes(data.meals || []);
          setLoading(false);
        })
        .catch(error => {
          console.error('Fehler beim Abrufen der Rezepte:', error);
          setLoading(false);
        });
    }
  }, [query]);

  function shortenText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <div className="search-results">
      <h1>Suchergebnisse für: <span className="query">{query}</span></h1>
      {loading && <p className="loading">Wird geladen...</p>}
      {recipes.length > 0 ? (
        <ul className="recipe-list">
          {recipes.map(recipe => (
            <li key={recipe.idMeal} className="recipe-item">
              <Link to={`/recipe/${recipe.idMeal}`} className="recipe-link">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
                <h2 className="recipe-title">{shortenText(recipe.strMeal, 20)}</h2>
              </Link>
              <Link to={`/recipe/${recipe.idMeal}`} className="view-details">Details 🍲</Link>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>Keine Rezepte gefunden.</p>
      )}
    </div>
  );
}

export default Search;
