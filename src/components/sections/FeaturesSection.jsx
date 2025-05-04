function FeaturesSection({ isDarkMode }) {
    return (
      <section className={`features-section ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="features-description">
            At VeriCapture, we are committed to providing tools that empower users
            with accurate, real-time information they can trust. Whether during
            emergencies or trending events, our platform ensures you stay informed
            with authentic, <span className={`highlight ${isDarkMode ? 'dark' : ''}`}>location-specific updates.</span>
          </p>
        </div>
  
        <div className="features">
          <div className={`feature-item ${isDarkMode ? 'dark' : ''}`}>
            <img 
              className="feature-icon" 
              src={isDarkMode ? "./assets/image/tick-dark.png" : "./assets/image/tick.png"} 
              alt="Authentic" 
            />
            <h3>Authentic Content Sharing Made Easy</h3>
            <p>
              VeriCapture empowers users to share real-time visual content directly, eliminating gallery uploads.
            </p>
          </div>
  
          <div className={`feature-item ${isDarkMode ? 'dark' : ''}`}>
            <img 
              className="feature-icon" 
              src={isDarkMode ? "./assets/image/FirstAid (1)-dark.png" : "./assets/image/FirstAid (1).png"} 
              alt="Emergency" 
            />
            <h3>Emergency Assistance Resource</h3>
            <p>
              Provides live verification, alerts for misinformation, and connects users with emergency services.
            </p>
          </div>
  
          <div className={`feature-item ${isDarkMode ? 'dark' : ''}`}>
            <img 
              className="feature-icon" 
              src={isDarkMode ? "./assets/image/MapPinArea-dark.png" : "./assets/image/MapPinArea.png"} 
              alt="Location" 
            />
            <h3>Location-Specific Content You Can Trust</h3>
            <p>
              Real-time, geolocation-based content with AI verification, ensuring relevance and authenticity.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default FeaturesSection;