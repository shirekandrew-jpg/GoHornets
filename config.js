// Configuration for different environments
const CONFIG = {
  // Production URL (GitHub Pages)
  PRODUCTION_URL: 'https://shirekandrew-jpg.github.io/GoHornets',
  
  // Check if we're in production or local development
  isProduction: window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1',
  
  // Get the correct base URL
  getBaseURL() {
    return this.isProduction ? this.PRODUCTION_URL : `http://localhost:3000`;
  },
  
  // Get email server URL (only works locally, production uses different method)
  getEmailServerURL() {
    return this.isProduction ? null : 'http://localhost:3001';
  }
};
