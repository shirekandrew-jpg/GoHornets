import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('r8x_session'));
    if (session) {
      setUser(session);
    } else {
      window.location.href = '/'; // Redirect to login if not logged in
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('r8x_session');
    window.location.href = '/';
  };

  if (!user) return null;

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Welcome, {user.firstName} {user.lastName}</h2>
      <div style={{ marginBottom: 16 }}>
        <strong>Email:</strong> {user.email}<br />
        <strong>Role:</strong> {user.isAdmin ? 'Admin' : 'Athlete'}
      </div>
      <button onClick={handleLogout} style={{ width: '100%', padding: 10 }}>Logout</button>
    </div>
  );
}

export default Dashboard;
