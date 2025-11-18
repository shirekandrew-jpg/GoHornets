// Configuration for different environments
const CONFIG = {
  // Production URL (GitHub Pages) - note the /GoHornets path
  PRODUCTION_URL: 'https://shirekandrew-jpg.github.io/GoHornets',
  
  // Check if we're in production or local development
  isProduction: window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1',
  
  // Get the correct base URL
  getBaseURL() {
    if (this.isProduction) {
      // For GitHub Pages, use the current origin + pathname base
      return window.location.origin + '/GoHornets';
    }
    return 'http://localhost:3000';
  },
  
  // Get email server URL (only works locally, production uses different method)
  getEmailServerURL() {
    return this.isProduction ? null : 'http://localhost:3001';
  }
};
