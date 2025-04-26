import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // navigate
import { apiRequest } from './utils/api'; // your fetch based apiRequest

function RequestPasswordOtp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    emailOrUsername: '',
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

    if (!form.emailOrUsername) {
      setMessage('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const data = await apiRequest({
        method: 'POST',
        route: '/users/password-reset-otp',
        body: {
          email: form.emailOrUsername,
        },
      });

      console.log('Request OTP Response:', data);

      if (data.success) {   // ✅ Only check if success === true
        setMessage('Request successful! Redirecting...');
        setTimeout(() => {
          // ✅ Correct redirect
          navigate(`/verify-otp?email=${encodeURIComponent(form.emailOrUsername)}`);
        }, 1000);
      } else {
        setMessage(data.message || 'Request failed.');
      }
    } catch (error) {
      setMessage('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h2>Request OTP</h2>
          <form onSubmit={handleSubmit} className="form-group">
            <div>
              <label>Email </label><br />
              <input
                type="text"
                name="emailOrUsername"
                value={form.emailOrUsername}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ marginTop: '1rem' }}>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Requesting...' : 'Request'}
              </button>
            </div>

            {message && <p style={{ marginTop: '1rem', color: 'crimson' }}>{message}</p>}
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default RequestPasswordOtp;
