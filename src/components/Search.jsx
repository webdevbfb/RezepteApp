import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query'); // Lese die Suchanfrage aus der URL
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      // Führe die API-Anfrage durch basierend auf der Suchanfrage
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => {
          setRecipes(data.meals || []); // Setze die Rezepte, wenn vorhanden
          setLoading(false);
        })
        .catch(error => {
          console.error('Fehler beim Abrufen der Rezepte:', error);
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="search-results">
      <h1>Suchergebnisse für {query}</h1>
      {loading && <p>Wird geladen...</p>}
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.idMeal}>
              <h2>{recipe.strMeal}</h2>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <Link to={`/recipe/${recipe.idMeal}`} className="view-details">Details ansehen</Link>
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
