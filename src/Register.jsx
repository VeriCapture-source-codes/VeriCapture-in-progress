import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import { apiRequest } from './utils/api';

function Register() {
  const navigate = useNavigate(); // initialize navigate
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    termsAccepted: false,
  });

  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!form.termsAccepted) {
      setMessage('You must accept the terms and conditions.');
      return;
    }

    if (form.password.length < 4) {
      setMessage('Your password must be more than four characters.');
      return;
    }

    setIsSubmitting(true);
    try {
      const data = await apiRequest({
        method: 'POST',
        route: '/users/create-form',
        body: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          userName: form.userName,
          password: form.password,
        },
      });

      console.log('Registration Response:', data);

      if (data.success) {
        setMessage(data.data || 'Registration successful!');
        setTimeout(() => {
          navigate('/login'); // redirect after successful registration
        }, 5500); // short delay so user can see success message
      } else {
        setMessage(data.message || 'Registration failed.');
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
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="form-group">
          <div>
            <label>First Name:</label><br />
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
          </div>
          <div>
            <label>Last Name:</label><br />
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label><br />
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Username:</label><br />
            <input type="text" name="userName" value={form.userName} onChange={handleChange} required />
          </div>
          <div>
            <label>Password:</label><br />
            <input type="password" name="password" value={form.password} onChange={handleChange} required />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={form.termsAccepted}
                onChange={handleChange}
              />{' '}
              I accept the terms and conditions
            </label>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </div>
          {message && <p style={{ marginTop: '1rem', color: 'crimson' }}>{message}</p>}
        </form>
      </div>
      <div className="col-3"></div>
    </div>
  );
}

export default Register;
