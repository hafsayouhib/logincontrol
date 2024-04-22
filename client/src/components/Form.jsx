// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetching existing users from local storage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      
      // Check if user with provided email already exists
      const userExists = storedUsers.some(u => u.email === formData.email);
      if (userExists) {
        console.error('User with this email already exists');
        return;
      }

      // Add new user to local storage
      const newUser = { ...formData };
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));

      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
