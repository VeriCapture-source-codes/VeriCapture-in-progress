import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DarkModeToggle from '../ui/DarkModeToggle';
import './Navigation.css'; // Import your CSS file for styling


function Navigation({ isDarkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <Link to="/" className="logo" onClick={handleNavClick}>
      <img 
          src={isDarkMode ? '/logo-dark.png' : '/Frame121.png'} 
          alt="VeriCapture logo"
          className="logo-image"
          onError={(e) => {
            e.target.style.display = 'none';
            console.error('Failed to load logo');
          }}
        />
      </Link>

      {/* Mobile menu button */}
      <button 
        className="menu-toggle" 
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Navigation links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={handleNavClick}
        >
          Home
        </NavLink>
        <NavLink 
          to="/realtime-capture" 
          onClick={handleNavClick}
        >
          RealTime Capture
        </NavLink>
        <NavLink 
          to="/map" 
          onClick={handleNavClick}
        >
          Map
        </NavLink>
        <NavLink 
          to="/trending" 
          onClick={handleNavClick}
        >
          Trending
        </NavLink>
        <NavLink 
          to="/about" 
          onClick={handleNavClick}
        >
          About us
        </NavLink>

        <nav>
      {/* other nav items */}
      <DarkModeToggle 
        isDarkMode={isDarkMode} 
        toggle={() => setIsDarkMode(!isDarkMode)} 
      />
    </nav>

        <Link 
          to="/register" 
          className="submit_btn-container"
          onClick={handleNavClick}
        >
          <button type="button" className="submit_btn">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;