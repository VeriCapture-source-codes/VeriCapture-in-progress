import MainContent from '../components/sections/MainContent';
import MapSection from '../components/sections/MapSection';
import StatsSection from '../components/sections/StatsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import TweetCard from '../components/ui/TweetCard';

export default function Home({ incidents }) {
  return (
    <>
      <MainContent />
      
      {incidents?.map(incident => (
        <TweetCard key={incident.id} incident={incident} />
      ))}
      
      <MapSection />
      <StatsSection />
      <FeaturesSection />
    </>
  );
}