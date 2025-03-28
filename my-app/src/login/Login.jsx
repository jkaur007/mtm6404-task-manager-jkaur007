import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { Login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    Login({ name: 'Jasmine' });
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login as Jasmine</button>
    </div>
  );
};
export default Login;