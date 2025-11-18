// Configuration for different environments
const CONFIG = {
  // Production URL (GitHub Pages) - note the /GoHornets path
  PRODUCTION_URL: 'https://shirekandrew-jpg.github.io/GoHornets',
  
  // Vercel serverless function URL for auto-sending emails
  EMAIL_API_URL: 'https://go-hornets.vercel.app/api/send-invite',
  
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
  
  // Get email server URL
  getEmailServerURL() {
    if (this.isProduction) {
      // In production, use Vercel serverless function
      return this.EMAIL_API_URL;
    }
    // In local dev, try local email server first
    return 'http://localhost:3001';
  }
};
