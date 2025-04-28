import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from './utils/api'; // import the apiRequest function
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='btn-container'> 
      <a className='my-btn' href="./register">Go to register</a>
     
      </div>
    </>
  );
}

export default App;
