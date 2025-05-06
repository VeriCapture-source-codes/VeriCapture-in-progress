function SubContent({ isDarkMode }) {
    return (
      <div className={`sub-content-text ${isDarkMode ? 'dark-mode' : ''}`}>
        <h2 className="mass">
          <span className={`sub-color ${isDarkMode ? 'dark' : ''}`}>Check</span><span className="sub-color-before">before you step-out</span>
        </h2>
        <p className="content-text">
          With vericapture, you can see important emergency updates captured by heroes on the road, who have spared their lives to save yours
        </p>
          
        <button className={`sub-content-button ${isDarkMode ? 'dark' : ''}`}>
          Take a look 
          <img 
            className="sub-scope" 
            src="/Vector3.png"
            alt="arrow icon" 
          />
        </button>
      </div>
    );
  }

  export default SubContent;  