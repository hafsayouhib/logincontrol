// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetching credentials from local storage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = storedUsers.find(u => u.email === loginData.email && u.password === loginData.password);
      
      if (user) {
        // Successfully logged in, set isLoggedIn to true in local storage
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
      } else {
        console.error('Failed to login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={loginData.email} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" value={loginData.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
