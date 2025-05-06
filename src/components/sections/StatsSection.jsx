function StatsSection({ isDarkMode }) {
    return (
      <section className={`stats-section ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="container">
          <div className="stats-content">
            <h2 className="stats-title">
              Over<span className={`highlight ${isDarkMode ? 'dark' : ''}`}>500+</span><span className="lives-saved">lives saved</span>
            </h2>
            <p className="stats-subtitle">Thanks to the heroes we never met</p>
            <img 
              className="stats-image" 
              src="/Frame 238.png"
              alt="Heroes collage" 
            />
          </div>
        </div>
      </section>
    );
}

export default StatsSection;  