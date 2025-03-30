import React from 'react';
import TaskList from '../components/TaskList';
import { useAuth } from '../login/AuthContext';

import { useNavigate } from 'react-router-dom';
import TaskItem from '../components/TaskItem';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard!</h1>
      <button onClick={handleLogout} className="logout-btn">Logout</button>

     
    </div>
  );
};

export default Dashboard;
