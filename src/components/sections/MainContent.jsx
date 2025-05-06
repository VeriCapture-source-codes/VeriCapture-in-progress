import React from 'react';
import './MainContent.css';
import { Link } from 'react-router-dom';

function MainContent({ isDarkMode }) {
  return (
    <section 
      className={`content-section ${isDarkMode ? 'dark-mode' : ''}`}
      style={{ 
        marginTop: '7rem',
        backgroundImage: `url('/image-2@2x.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      
    >
    {/* Verified News Checkbox - Now with dark mode support */}
      <div className="checkbox-container">
        <input 
          type="checkbox" 
          name="style1" 
          id="style1" 
          className={`styled-checkbox ${isDarkMode ? 'dark' : ''}`}  
        />
        <button htmlFor="style1" className={`btn ${isDarkMode ? 'dark' : ''}`}>
          The News is verified
        </button>
      </div>
      
      {/* Main Heading */}
      <header>
        <h1 className="main-heading">If It's Not Here, <br />It Never Happened</h1>
      </header>

      {/* Subheading */}
      <p className="subheading">Let's Show you what is happening in your location</p>
      
      <div className="action-buttons">
        <Link to="/explore" className="explore-link">
          <button type="button" className={`explore-button ${isDarkMode ? 'dark' : ''}`}>
            <span>Explore</span>
            <img 
              className="button-icon" 
              src="/Vector3.png"
              alt="Explore icon" 
            />
          </button>
        </Link>
        
        <Link to="/login" className="login-link">
          <button type="button" className={`login-button ${isDarkMode ? 'dark' : ''}`}>
            <span>Login</span>
            <img 
              className="button-icon" 
              src="/Vector2.png"
              alt="Login icon" 
            />
          </button>
        </Link>
      </div>
      {/* Decorative Arrow - Dark mode variant */}
      <img 
        src="/Vector.png" 
        alt="Decorative arrow" 
        className="decorative-arrow" 
      />

      {/* Crime Scene Button */}
      <button type="button" className={`crime-scene-btn ${isDarkMode ? 'dark' : ''}`}>
        Crime Scene
      </button>

      {/* Location Indicator */}
      <p className="location-indicator">Live in Oota, Lagos</p>

      {/* Action Buttons */}
     
      </section>
    
  );
}

export default MainContent;