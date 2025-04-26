import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // navigate
import { apiRequest } from './utils/api'; // your fetch based apiRequest

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    emailOrUsername: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!form.emailOrUsername || !form.password) {
      setMessage('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const data = await apiRequest({
        method: 'POST',
        route: '/users/sign-in-user', // <-- your login endpoint
        body: {
          email: form.emailOrUsername,
          password: form.password,
        },
      });

      console.log('Login Response:', data);

      if (data.success && data.data?._id) {
        localStorage.setItem('authToken', data.data._id); // store token
        setMessage('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/profile'); // redirect to profile page
        }, 1000);
      } else {
        setMessage(data.message || 'Login failed.');
      }
    } catch (error) {
      setMessage('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div className="row"></div>
      <div className="col-3"></div>
      <div className="col-6">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="form-group">
          <div>
            <label>Email or Username:</label><br />
            <input
              type="text"
              name="emailOrUsername"
              value={form.emailOrUsername}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label><br />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </div>


          {message && <p style={{ marginTop: '1rem', color: 'crimson' }}>{message}</p>}
        </form>
      </div>
      <div className="col-3"></div>
    </div>
  );
}

export default Login;
