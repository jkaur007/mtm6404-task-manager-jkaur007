import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './login/AuthContext';
import { TaskProvider } from './components/TaskContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <TaskProvider>
  
          <App />
      </TaskProvider>
    </AuthProvider>
  </React.StrictMode>
);
