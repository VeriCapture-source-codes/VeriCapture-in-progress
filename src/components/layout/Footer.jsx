import { Link } from 'react-router-dom';

function Footer({ isDarkMode }) {
  return (
    <footer className={`footer ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/realtime-capture">RealTime Capture</Link>
        <Link to="/map">Map</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/about">About Us</Link>
        <img 
          className="footer-logo" 
          src={isDarkMode ? "./logo-dark.png" : "./Frame121.png"  
          } 
          alt="VeriCapture logo" 
        />
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-social-media">
          <a href="#" aria-label="Facebook">
            <img 
              src="./Vector (5).png" 
              alt="Facebook" 
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img 
              src="./Vector (6).png" 
              alt="Instagram" 
            />
          </a>
          <a href="#" aria-label="Twitter">
            <img 
              src="./Vector (7).png" 
              alt="Twitter" 
            />
          </a>
          <a href="#" aria-label="Threads">
            <img 
              src="./Vector (8).png" 
              alt="Threads" 
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;