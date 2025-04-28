
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Register from './Register'; // import your Register component


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './Login';
import UserProfile from './UserProfile';
import RequestPasswordOtp from './RequestPasswordOtp';
import VerifyResetOtp from './VerifyResetOtp';
import CreateProfile from './CreateProfile'; // Adjust path as needed

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>

<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/request-password-reset-otp" element={<RequestPasswordOtp />} />
        <Route path="/verify-otp" element={<VerifyResetOtp />} />
        <Route path="/createprofile" element={<CreateProfile />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </QueryClientProvider>
);
