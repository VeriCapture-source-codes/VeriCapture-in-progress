const baseUrl = 'http://localhost:5000/api/v1';

export async function apiRequest({ 
  method = 'GET', 
  route, 
  body = null, 
  formData = null 
}) {
  // Validate route parameter
  if (!route || typeof route !== 'string') {
    throw new Error('Route must be a valid string');
  }

  // Ensure route starts with slash
  const normalizedRoute = route.startsWith('/') ? route : `/${route}`;

  try {
    const options = {
      method: method.toUpperCase(),
      credentials: 'include',
      headers: {},
    };

    // Handle FormData
    if (formData) {
      options.body = formData;
    } 
    // Handle JSON body
    else if (body) {
      options.headers['Content-Type'] = 'application/json';
      options.headers['Accept'] = 'application/json';
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${baseUrl}${normalizedRoute}`, options);
    
    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    const isJson = contentType?.includes('application/json');
    
    const data = isJson ? await response.json() : await response.text();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || `Request failed with status ${response.status}`,
        data: null,
        status: response.status,
        error: data.error || true,
      };
    }

    return {
      success: true,
      message: data.message || 'Request successful',
      data: data.data || data, // Handle different response structures
      status: response.status,
    };
  } catch (error) {
    console.error('API request failed:', error);
    return {
      success: false,
      message: 'Network error: Failed to connect to server',
      data: null,
      status: null,
      error: true,
    };
  }
}