import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    // For simplicity, we'll just compare the entered username and password with hardcoded values.
    if (username === 'Username' && password === 'password') {
      setAuthenticated(true);
      setError('');
    } else {
      setAuthenticated(false);
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h3>Login</h3>
      {authenticated ? (
        <p>You are logged in.</p>
      ) : (
        <div>
          <p>{error}</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
