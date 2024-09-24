import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css'; // Neue CSS-Datei für Kategorien

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => setCategories(data.categories));
  }, []);

  return (
    <div className="categories">
      <h2>Kategorien</h2>
      <div className="categories-grid">
        {categories.map(category => (
          <div className="category-card" key={category.idCategory}>
            <Link to={`/category/${category.strCategory}`}>
              <img src={category.strCategoryThumb} alt={category.strCategory} />
              <h3>{category.strCategory}</h3>
              <p>{category.strCategoryDescription.slice(0, 100)}...</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
