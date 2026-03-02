// Create this file as src/config/api.js in your frontend

const API_BASE_URL = import.meta.env.VITE_API_URL || 
                     (import.meta.env.DEV ? 
                      'http://localhost:5000' : 
                      'https://webhunt-l677.onrender.com/');

export default API_BASE_URL;

// API helper functions
export const api = {
  // Submit a challenge solution
  async submitChallenge(username, challengeName, clientHash) {
    const response = await fetch(`${API_BASE_URL}/api/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        challenge_name: challengeName,
        client_hash: clientHash
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  },

  // Get user's submission status
  async getStatus(username) {
    const response = await fetch(`${API_BASE_URL}/api/status/${encodeURIComponent(username)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  },

  // Get all challenges
  async getChallenges() {
    const response = await fetch(`${API_BASE_URL}/api/challenges`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  },

  // Health check
  async healthCheck() {
    const response = await fetch(`${API_BASE_URL}/`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }
};