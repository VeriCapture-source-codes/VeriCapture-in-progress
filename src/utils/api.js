// src/utils/api.js

const baseUrl = 'http://localhost:5000/api/v1'; // your base API URL

export async function apiRequest({ method = 'GET', route, body = null }) {
  try {
    const response = await fetch(`${baseUrl}${route}`, {
      method: method.toUpperCase(),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      credentials: 'include', // <- VERY IMPORTANT for sending cookies
      body: body ? JSON.stringify(body) : null,
    });

    const data = await response.json();

    return {
      success: response.ok,
      message: data.message || (response.ok ? 'Request successful' : 'Request failed'),
      data: data.data || null,
      statusCode: response.status,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || 'Something went wrong',
      data: null,
      statusCode: null,
    };
  }
}
