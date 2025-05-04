import React from 'react';
// Update your component with these SVG icons
function DarkModeToggle({ isDarkMode, toggle }) {
  return (
    <button className={`dark-mode-toggle ${isDarkMode ? 'dark' : ''}`} onClick={toggle}>
      <div className="toggle-track">
        <div className="toggle-thumb" />
      </div>
      <span className="toggle-icons">
        <svg className="sun-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.5 4.9l1.4 1.4L5.9 5 4.5 3.6 3.5 4.9zm14.2 14.2 1.4 1.4 1.4-1.4-1.4-1.4-1.4 1.4zM5 18.1l1.4 1.4 1.4-1.4-1.4-1.4L5 18.1zM18.1 5l1.4-1.4-1.4-1.4-1.4 1.4 1.4 1.4zM1 11h3v2H1v-2zm19 0h3v2h-3v-2z"/>
        </svg>
        <svg className="moon-icon" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.4 5.4 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
        </svg>
      </span>
    </button>
  );
}

export default DarkModeToggle;