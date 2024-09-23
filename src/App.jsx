import "./App.css"
import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import Categories from './components/Categories.jsx';
import CategoryRecipes from './components/CategoryRecipes.jsx';
import RandomRecipe from './components/RandomRecipe.jsx';
import Search from './components/Search.jsx';
import DarkModeToggle from './components/DarkModeToggle.jsx';

function Header() {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.searchInput.value.trim();
    if (searchQuery) {
      // Leite zu den Suchergebnissen weiter, falls eine Suchanfrage eingegeben wurde
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Startseite</Link></li>
          <li><Link to="/categories">Kategorien</Link></li>
          <li><Link to="/random">Überrasch mich</Link></li>
        </ul>
        <form onSubmit={handleSearch} className="search-form">
          <input name="searchInput" type="text" placeholder="Suche Rezepte..." />
          <button type="submit">Suche</button>
        </form>
        <DarkModeToggle />
      </nav>
    </header>
  );
}

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:category" element={<CategoryRecipes />} />
          <Route path="/random" element={<RandomRecipe />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
  );
}

export default App;
