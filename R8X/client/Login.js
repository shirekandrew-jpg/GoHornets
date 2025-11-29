
import React, { useState, useEffect } from 'react';

const CREDENTIALS_KEY = 'r8x_credentials';
const SESSION_KEY = 'r8x_session';

function hashPassword(password) {
  // Simple SHA-256 hash using browser crypto API
  return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(password)).then(buffer => {
    return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
  });
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Auto-create admin account if no accounts exist
    const credentials = JSON.parse(localStorage.getItem(CREDENTIALS_KEY) || '[]');
    if (credentials.length === 0) {
      const defaultAdmin = {
        id: 1,
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@r8x.com',
        passwordHash: '',
        admin: true,
        active: true,
        createdAt: Date.now(),
      };
      // Set default password
      hashPassword('R8Xadmin!1').then(hash => {
        defaultAdmin.passwordHash = hash;
        localStorage.setItem(CREDENTIALS_KEY, JSON.stringify([defaultAdmin]));
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    const credentials = JSON.parse(localStorage.getItem(CREDENTIALS_KEY) || '[]');
    const user = credentials.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      setError('Invalid email or password.');
      return;
    }
    const passwordHash = await hashPassword(password);
    if (passwordHash !== user.passwordHash) {
      setError('Invalid email or password.');
      return;
    }
    // Create session
    const session = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.admin || false,
      timestamp: Date.now(),
      expiresAt: Date.now() + (24 * 60 * 60 * 1000), // 24 hours
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setError('');
    window.location.href = '/dashboard.html'; // Redirect after login
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Login to R8X</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>Email:</label><br />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: 8 }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Password:</label><br />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: 8 }} />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
        <button type="submit" style={{ width: '100%', padding: 10 }}>Login</button>
      </form>
      <div style={{ marginTop: 16, fontSize: 12, color: '#888' }}>
        <div>Default admin: admin@r8x.com / R8Xadmin!1</div>
      </div>
    </div>
  );
}

export default Login;
