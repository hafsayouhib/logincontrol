import React from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Register from './components/Form';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import LoginControl from './components/Logincontrol';

const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<LoginControl />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    
  </BrowserRouter>
  )
};

export default App;
