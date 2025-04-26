import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { apiRequest } from './utils/api';

function VerifyResetOtp() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get('email'); // get email from query param

  const navigate = useNavigate();
  const [form, setForm] = useState({
    otp: '',
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

    if (!form.otp) {
      setMessage('Please enter the OTP.');
      return;
    }

    setIsSubmitting(true);
    try {
      const data = await apiRequest({
        method: 'POST',
        route: '/users/verify-otp', // ✅ fixed route
        body: {
          email,
          OTP: form.otp,
        },
      });

      console.log('Verify OTP Response:', data);

      if (data.success) {
        setMessage('OTP verified! Redirecting to login...');
        setTimeout(() => {
          navigate('/login'); // ✅ redirect to login page
        }, 1000);
      } else {
        setMessage(data.message || 'OTP verification failed.');
      }
    } catch (error) {
      setMessage('An unexpected error occurred.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h2>Verify OTP</h2>
          <form onSubmit={handleSubmit} className="form-group">
            <div style={{ marginBottom: '1rem' }}>
              <label>Email:</label><br />
              <input
                type="text"
                value={email}
                disabled
                style={{ width: '100%', backgroundColor: '#f0f0f0' }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label>OTP:</label><br />
              <input
                type="text"
                name="otp"
                value={form.otp}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Verifying...' : 'Verify OTP'}
            </button>

            {message && <p style={{ marginTop: '1rem', color: 'crimson' }}>{message}</p>}
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default VerifyResetOtp;
