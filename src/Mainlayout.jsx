import Navigation from './components/layout/Navigation';
import MainContent from './components/sections/MainContent';
import TweetCard from './components/ui/TweetCard';
import StatsSection from './components/sections/StatsSection';
import SubContent from './components/sections/SubContent';
import MapSection from './components/sections/MapSection';  
import FeaturesSection from './components/sections/FeaturesSection';
import Footer from './components/layout/Footer';

export default function MainLayout({ children, isDarkMode }) {
  return (
    <div className={`main-layout ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navigation isDarkMode={isDarkMode} />
      <MainContent isDarkMode={isDarkMode} />
      <SubContent isDarkMode={isDarkMode} />
      <MapSection isDarkMode={isDarkMode} />
      <TweetCard isDarkMode={isDarkMode} />
      <StatsSection isDarkMode={isDarkMode} />
      <FeaturesSection isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />

      {children} {/* For additional page content */}
    </div>
  );
}