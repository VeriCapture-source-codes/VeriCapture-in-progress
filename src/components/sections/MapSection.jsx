function MapSection({ isDarkMode }) {
    return (
      <section className={`map-section ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="map-container">
          <div className="map-content">
            <h2 className="map-title">
              See where it's <span className={`highlight ${isDarkMode ? 'dark' : ''}`}>happening</span>
            </h2>
            <p className="map-description">
              View live reports of events unfolding around you, so you always know what's real and what's not.
            </p>
            <button className={`map-button ${isDarkMode ? 'dark' : ''}`}>
              Explore 
              <img 
                src="/Vector3.png"
                alt="arrow icon" 
              />
            </button>
          </div>
          <div className="map-location">
            <img 
              src="./image15.png"
              alt="Map visualization" 
              className="map-image" 
            />
          </div>
        </div>
      </section>
    );
}

export default MapSection;  