import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginControl = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>plzz login in</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginControl;
