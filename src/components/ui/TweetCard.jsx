import React, { useState } from 'react';
import './TweetCard.css'; 

function TweetCard({ isDarkMode = false }) {
  // State for interaction counts
  const [interactionCounts, setInteractionCounts] = useState({
    like: 0,
    dislike: 0,
    comment: 0
  });

  // State for comments
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Handle interaction actions
  const handleAction = (actionType) => {
    if (actionType === 'comment') {
      const commentText = prompt('Enter your comment:');
      if (commentText) {
        setComments([...comments, commentText]);
        setInteractionCounts(prev => ({
          ...prev,
          comment: prev.comment + 1
        }));
      }
    } else if (actionType === 'share') {
      if (navigator.share) {
        navigator.share({
          title: 'Check out this tweet',
          text: 'Fuel tanker falls and caused serious traffic on Awka Onitsha Express Way',
          url: window.location.href
        }).catch(err => console.error('Error sharing:', err));
      } else {
        alert('Share this URL: ' + window.location.href);
      }
    } else {
      setInteractionCounts(prev => ({
        ...prev,
        [actionType]: prev[actionType] + 1
      }));
    }
  };

  return (
    <article className={`tweet-card ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Header Section */}
      <header className="tweet-header">
        <div className="user-info">
          <img 
            src='/Ellipse 2.png' 
            alt="Profile" 
            className="user-avatar"
            onError={(e) => e.target.style.display = 'none'}
          />
          <div className="user-meta">
            <h2 className='username'>Kaycee Pastor</h2>
            <div className="meta-details">
              <span className='post-time'>4hr ago</span>
              <span className="post-location">
                <img 
                  src='/Vector (12).png' 
                  alt="location" 
                  className='location-icon'
                  aria-hidden="true"
                />
                Awka Anambra
              </span>
            </div>
          </div>
        </div>
        <button className={`category-tag ${isDarkMode ? 'dark' : ''}`}>
          Traffic
        </button>
      </header>

      {/* Content Section */}
      <div className="tweet-content">
        <p>
          Fuel tanker falls and caused serious traffic
          <span className="location-reference">
            on Awka Onitsha Express Way
          </span>
        </p>
        <img 
          src='/image.png'
          alt="Traffic incident" 
          className="tweet-image"
        />
      </div>

      {/* Action Buttons */}
      <div className="tweet-actions">
        <button 
          onClick={() => handleAction('like')}
          className={`action-button ${isDarkMode ? 'dark' : ''}`}
        >
          <span className="icon">thumb_up</span>
          <span className="count">{interactionCounts.like}</span>
        </button>
        
        <button 
          onClick={() => handleAction('dislike')}
          className={`action-button ${isDarkMode ? 'dark' : ''}`}
        >
          <span className="icon">thumb_down</span>
          <span className="count">{interactionCounts.dislike}</span>
        </button>
        
        <button 
          onClick={() => handleAction('comment')}
          className={`action-button ${isDarkMode ? 'dark' : ''}`}
        >
          <span className="icon">comment</span>
          <span className="count">{interactionCounts.comment}</span>
        </button>
        
        <button 
          onClick={() => handleAction('share')}
          className={`action-button ${isDarkMode ? 'dark' : ''}`}
        >
          <span className="icon">share</span>
        </button>
      </div>

      {/* Comments Section */}
      {comments.length > 0 && (
        <div className="comments-section">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default TweetCard;