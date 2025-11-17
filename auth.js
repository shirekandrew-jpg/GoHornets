// Authentication and session management for athlete portal

const SESSION_KEY = 'hornet_athlete_session';
const SESSION_EXPIRY_HOURS = 24;

// Set athlete session
function setAthleteSession(athlete) {
  const session = {
    id: athlete.id,
    firstName: athlete.first_name,
    lastName: athlete.last_name,
    gender: athlete.gender,
    isAdmin: athlete.admin || false,
    timestamp: Date.now(),
    expiresAt: Date.now() + (SESSION_EXPIRY_HOURS * 60 * 60 * 1000)
  };
  
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

// Get current athlete session
function getAthleteSession() {
  const sessionData = localStorage.getItem(SESSION_KEY);
  
  if (!sessionData) {
    return null;
  }
  
  try {
    const session = JSON.parse(sessionData);
    
    // Check if session has expired
    if (Date.now() > session.expiresAt) {
      clearAthleteSession();
      return null;
    }
    
    return session;
  } catch (error) {
    console.error('Error parsing session:', error);
    clearAthleteSession();
    return null;
  }
}

// Clear athlete session (logout)
function clearAthleteSession() {
  localStorage.removeItem(SESSION_KEY);
}

// Check if athlete is logged in
function isAthleteLoggedIn() {
  return getAthleteSession() !== null;
}

// Require authentication - redirect to login if not authenticated
function requireAthleteAuth() {
  if (!isAthleteLoggedIn()) {
    window.location.href = 'index.html';
    return false;
  }
  return true;
}

// Logout function
function logoutAthlete() {
  clearAthleteSession();
  window.location.href = 'index.html';
}

// Extend session expiry (call on user activity)
function extendSession() {
  const session = getAthleteSession();
  if (session) {
    session.expiresAt = Date.now() + (SESSION_EXPIRY_HOURS * 60 * 60 * 1000);
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
}
