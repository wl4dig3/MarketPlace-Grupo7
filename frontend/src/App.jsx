import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import { AuthProvider } from './context/AuthContext';
import Perfil from './views/Perfil';
import { ProductsProvider } from './context/ProductsContext';
import { FavoritesProvider } from './context/FavoritesContext'
import Productos from './views/Productos';
import CrearPublicacion from './views/CrearPublicacion'
import FavoriteSidebar from './components/FavoriteSidebar';


const App = () => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/crear-publicacion" element={<CrearPublicacion />} />
            <Route path="/favorites" element={<FavoriteSidebar />} />
          </Routes>
        </FavoritesProvider>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default App;
