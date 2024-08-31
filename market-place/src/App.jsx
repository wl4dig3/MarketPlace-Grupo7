import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import { AuthProvider } from './context/AuthContext';
import { ProductsProvider } from './context/ProductsContext';
import Productos from './views/Productos';


const App = () => {
  return (
    <AuthProvider>
     <ProductsProvider>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
      </ProductsProvider> 
    </AuthProvider>
  );
};

export default App;


