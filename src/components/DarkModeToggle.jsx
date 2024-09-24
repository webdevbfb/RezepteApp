import React, { useState } from 'react';
import './DarkModeToggle.css'; // Neue CSS-Datei für das Dark Mode Toggle

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '🌞' : '🌜'}
    </button>
  );
}

export default DarkModeToggle;
