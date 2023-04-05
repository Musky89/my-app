import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="settings-section">
        <h3>Appearance</h3>
        <label htmlFor="darkModeToggle">
          <input
            type="checkbox"
            id="darkModeToggle"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
          Dark Mode
        </label>
      </div>
      <div className="settings-section">
        <h3>Language</h3>
        <label htmlFor="languageSelect">Select Language:</label>
        <select name="language" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          {/* Add more language options */}
        </select>
      </div>
    </div>
  );
};

export default Settings;
