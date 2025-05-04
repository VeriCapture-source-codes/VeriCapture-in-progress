import React from 'react';
import backgroundImage from '../../assets/image/image 2@2x.png';
import './MainContent.css';
import { Link } from 'react-router-dom';

// Import all button icons properly
import decorativeArrowLight from '../../assets/image/Vector.png';
import decorativeArrowDark from '../../assets/image/dark-mode.png';


function MainContent({ isDarkMode }) {
  return (
    <section 
      className={`content-section ${isDarkMode ? 'dark-mode' : ''}`}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
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
        <label htmlFor="style1" className={`btn ${isDarkMode ? 'dark' : ''}`}>
          The News is verified
        </label>
      </div>
      
      {/* Main Heading */}
      <header>
        <h1 className="main-heading">If It's Not Here, <br />It Never Happened</h1>
      </header>

      {/* Subheading */}
      <p className="subheading">Let's Show you what is happening in your location</p>

      {/* Decorative Arrow - Dark mode variant */}
      <img 
        src={isDarkMode 
          ? "/assets/image/Vector-dark.png" 
          : "/assets/image/Vector.png"
        } 
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
      <div className="action-buttons">
        <Link to="/explore" className="explore-link">
          <button type="button" className={`explore-button ${isDarkMode ? 'dark' : ''}`}>
            <span>Explore</span>
            <img 
              className="button-icon" 
              src={isDarkMode 
                ? "/assets/image/Vector(2).png" 
                : "/assets/image/Vector(3).png"
              } 
              alt="Explore icon" 
            />
          </button>
        </Link>
        
        <Link to="/login" className="login-link">
          <button type="button" className={`login-button ${isDarkMode ? 'dark' : ''}`}>
            <span>Login</span>
            <img 
              className="button-icon" 
              src={isDarkMode 
                ? "/assets/image/Vector (2)-dark.png" 
                : "/assets/image/Vector (2).png"
              } 
              alt="Login icon" 
            />
          </button>
        </Link>
      </div>
      </section>
    
  );
}

export default MainContent;