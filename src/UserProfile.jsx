import React, { useState, useEffect } from 'react';
import GoLiveModal from './components/GoLiveModal';
import { apiRequest } from './utils/api'; // make sure path is correct

const categories = ['crime', 'fight', 'politics', 'trending'];

function UserProfile() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryModal, setCategoryModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCategoryModal(false);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
    fetchPosts(); // Refetch posts after closing GoLiveModal (new post might have been added)
  };

  const getFileExtension = (url) => {
    return url.split('.').pop().toLowerCase().split('?')[0]; // handle URL params
  };

  const renderMedia = (mediaUrl) => {
    const ext = getFileExtension(mediaUrl);
    if (['mp4', 'mov', 'mkv', 'avi', 'webm'].includes(ext)) {
      return (
        <video
          src={mediaUrl}
          controls
          style={{ width: '80%', marginTop: '0.5rem', borderRadius: '8px' }}
        />
      );
    } else if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
      return (
        <img
          src={mediaUrl}
          alt="Post Media"
          style={{ width: '100%', marginTop: '0.5rem', borderRadius: '8px' }}
        />
      );
    } else {
      return <p>Unsupported media type</p>;
    }
  };

  const fetchPosts = async () => {
    try {
      const result = await apiRequest({
        method: 'GET',
        route: '/users/get-user-posts', // your backend endpoint
      });

      if (result.success) {
        setPosts(result.data.posts || []); // <-- CORRECT: result.posts not result.data.posts
        console.log('Fetched posts:', result.data); // better logging here
      } else {
        console.error('Failed to fetch posts:', result.message);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when component mounts
  }, []);

  return (
    <div style={{ position: 'relative', padding: '2rem' }}>
      {/* Go Live Section */}
      <button onClick={() => setCategoryModal(true)} style={{ marginBottom: '1rem' }}>
        Go Live
      </button>

      {categoryModal && (
        <div style={{
          position: 'absolute',
          top: '60px',
          background: 'white',
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              style={{ 
                display: 'block',
                width: '100%',
                padding: '0.5rem',
                marginBottom: '0.5rem',
                background: '#eee',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {selectedCategory && (
        <GoLiveModal selectedCategory={selectedCategory} onClose={handleCloseModal} />
      )}

      {/* Posts Section */}
      <div style={{ marginTop: '5rem' }}>
        <h2>All Posts</h2>
        <div className='row'>
       
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post) => (
            <div 
              key={post._id} 
              style={{
                background: '#f9f9f9',
                marginBottom: '1rem',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              
            
              }}
              className='col-4'
            >
              <h4>{post.caption}</h4>
              <p><strong>Location:</strong> {post.location}</p>

              {renderMedia(post.media)}

              {/* Optionally show thumbnail or user info */}
              {/* {post.user?.thumbnail && (
                <img 
                  src={post.user.thumbnail} 
                  alt="User Thumbnail" 
                  style={{ width: '40px', height: '40px', borderRadius: '50%', marginTop: '0.5rem' }}
                />
              )} */}
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
