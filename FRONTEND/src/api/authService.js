import axios from 'axios';

// Function to log in the user
export const loginUser = async (email, password) => {
  const url = "http://localhost:8000/api/auth/login"; // API endpoint

  const data = {
    email,
    password,
  };

  try {
    // Make POST request with the login data
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Store the token or relevant user data in localStorage
    localStorage.setItem('token', response.data.token); // Store token for later use
    return response.data; // Return the response data to the caller

  } catch (error) {
    // Handle errors
    if (error.response) {
      // Server responded with an error (status code outside the 2xx range)
      console.error('Server Error Response:', error.response.data);
      throw new Error(error.response.data.message || 'Invalid credentials');
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response from server:', error.request);
      throw new Error('No response from the server');
    } else {
      // Something happened in setting up the request
      console.error('Request Setup Error:', error.message);
      throw new Error('Error in request setup');
    }
  }
};
