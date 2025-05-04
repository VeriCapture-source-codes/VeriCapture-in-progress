import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Register from './Register'; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './Login';
import UserProfile from './UserProfile';
import RequestPasswordOtp from './RequestPasswordOtp';
import VerifyResetOtp from './VerifyResetOtp';
import CreateProfile from './CreateProfile'; 
import Navigation from './components/layout/Navigation';
import MainContent from './components/sections/MainContent'; 
import SubContent from './components/sections/SubContent';
import MapSection from './components/sections/MapSection';
import TweetCard from './components/ui/TweetCard';
import DarkModeToggle from './components/ui/DarkModeToggle';
import StatsSection from './components/sections/StatsSection';
import FeaturesSection from './components/sections/FeaturesSection';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/layout/Footer';
import MainLayout from './Mainlayout';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>

<React.StrictMode>
    <BrowserRouter>
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/request-password-reset-otp" element={<RequestPasswordOtp />} />
        <Route path="/verify-otp" element={<VerifyResetOtp />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/navigation" element={<Navigation />} /> 
        <Route path="/maincontent" element={<MainContent />} />
        <Route path="/subcontent" element={<SubContent />} />
        <Route path="/mapsection" element={<MapSection />} />
        <Route path="/tweetcard" element={<TweetCard />} /> 
        <Route path="/statssection" element={<StatsSection />} />
        <Route path="/featuressection" element={<FeaturesSection />} />
        <Route path="/darkmodetoggle" element={<DarkModeToggle />} />
        <Route path="/ErrorBoundary" element={<ErrorBoundary />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/mainlayout" element={<MainLayout />} />

      </Routes>
    </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
  </QueryClientProvider>
);
