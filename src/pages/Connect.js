import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError('');
    
    
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const validUsers = response.data.slice(0, 3);
        setUsers(validUsers);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setError('An error occurred while fetching users. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); 

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    const user = users.find(
      (u) => u.email === email && u.username === password
    );

    if (user) {
      if (user.username === 'Bret') {
        navigate('/direction', { state: { name: user.name } });
      } else if (user.username === 'Samantha') {
        navigate('/formateur', { state: { name: user.name } });
      } else {
        navigate('/student', { state: { name: user.name } });
      }
    } else {
      setError('Invalid email or password!');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {//the key that was pressed
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      
      
      {error && <p className="error-message">{error}</p>}

      
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyPress={handleKeyPress}//listens for keyboard input
        className="login-input"
      />
      
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyPress={handleKeyPress}
        className="login-input"
      />
      
      
      <button onClick={handleLogin} disabled={loading} className="login-btn">
        {loading ? 'Loading...' : 'Login'}
      </button>
    </div>
  );
};

export default LoginPage;
