import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';
// import ProfilePage from './components/ProfilePage';
import { AuthProvider } from './context/AuthContext';
import Perfil from './views/Perfil';
import { AuthProvider } from './context/AuthContext';
import { ProductsProvider } from './context/ProductsContext';
import Productos from './views/Productos';


const App = () => {
  return (
    <AuthProvider>
     <ProductsProvider>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/profile" element={<Perfil />} />
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
      </ProductsProvider> 
    </AuthProvider>
  );
};

export default App;


