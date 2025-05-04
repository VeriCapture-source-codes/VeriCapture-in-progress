import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from './utils/api';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

// Components
import Navigation from './components/layout/Navigation';
import MainContent from './components/sections/MainContent';
import SubContent from './components/sections/SubContent';
import TweetCard from './components/ui/TweetCard';
import MapSection from './components/sections/MapSection';
import StatsSection from './components/sections/StatsSection';
import FeaturesSection from './components/sections/FeaturesSection';
import DarkModeToggle from './components/ui/DarkModeToggle';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tweetCounts, setTweetCounts] = useState({
    like: 0,
    dislike: 0,
    comment: 0
  });

  // Dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  // Handle tweet interactions
  const handleTweetAction = (action) => {
    if (action === 'comment') {
      const comment = prompt('Add your comment:');
      if (comment) {
        setTweetCounts(prev => ({
          ...prev,
          comment: prev.comment + 1
        }));
      }
    } else if (action === 'share') {
      if (navigator.share) {
        navigator.share({
          title: 'Traffic Alert',
          text: 'Fuel tanker falls and caused serious traffic on Awka Onitsha Express Way',
          url: window.location.href
        }).catch(console.error);
      } else {
        alert(`Share this post:\n${window.location.href}`);
      }
    } else {
      setTweetCounts(prev => ({
        ...prev,
        [action]: prev[action] + 1
      }));
    }
  };

  // Enhanced data fetching
  const { 
    data: posts = [], 
    isLoading, 
    isError, 
    error 
  } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await apiRequest({ route: '/posts' });
      if (!response.success) throw new Error(response.message);
      return response.data || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes cache
    retry: 2 // Retry twice on failure
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorDisplay message={error.message} />;

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='btn-container'> 
        <Link className='my-btn' to="/register">Go to register</Link>
      </div>

      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent isDarkMode={isDarkMode} />
      <SubContent isDarkMode={isDarkMode} />
      
      {/* Safe posts rendering */}
      {posts.length > 0 ? (
        posts.map(post => (
          <TweetCard 
            key={post.id} 
            post={post}
            counts={tweetCounts} 
            onAction={handleTweetAction}
            isDarkMode={isDarkMode}
          />
        ))
      ) : (
        <div className="no-posts">No posts available</div>
      )}

     <MainContent isDarkMode={isDarkMode} />
     <SubContent isDarkMode={isDarkMode} />
      <SubContent isDarkMode={isDarkMode} />
      <MapSection isDarkMode={isDarkMode} />
      <StatsSection isDarkMode={isDarkMode} />
      <FeaturesSection isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;