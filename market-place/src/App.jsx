import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LandingPage from './views/LandingPage';
// import ProfilePage from './components/ProfilePage';
import { AuthProvider } from './context/AuthContext';
import Perfil from './views/Perfil';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/profile" element={<Perfil />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;


