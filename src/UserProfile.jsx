import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from './utils/api'; // your fetch-based apiRequest

function UserProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const authToken = localStorage.getItem('authToken');

      if (!authToken) {
        setMessage('Unauthorized. Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 1500);
        return;
      }

      try {
        const data = await apiRequest({
          method: 'GET',
          route: `/users/get-user-by-id/${authToken}`, // your route
        });

        console.log('Profile Response:', data);

        if (data.success && data.data) {
          setUser(data.data);
        } else {
          setMessage(data.message || 'Failed to load profile.');
        }
      } catch (error) {
        setMessage('An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (loading) {
    return <div style={{ padding: '2rem' }}>Loading profile...</div>;
  }

  if (message) {
    return <div style={{ padding: '2rem', color: 'crimson' }}>{message}</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>User Profile</h2>
      {user ? (
        <div>
           <p><strong>ID:</strong> {user.id}</p>

          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.userName}</p>
          {/* You can add more fields here based on what your API returns */}
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default UserProfile;
