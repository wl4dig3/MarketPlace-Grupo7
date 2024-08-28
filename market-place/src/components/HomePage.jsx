import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';

const HomePage = () => {
  const [formType, setFormType] = useState('none');

  const handleShowForm = (formType) => {
    setFormType(formType);
  };

  return (
    <div className="container mt-4">
      <h1>Prueba de ecommerce</h1>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={() => handleShowForm('register')}>Register</button>
        <button className="btn btn-secondary" onClick={() => handleShowForm('login')}>Login</button>
      </div>
      <div className="mt-4">
        {formType === 'register' && <Register />}
        {formType === 'login' && <Login />}
        {formType === 'none' && <p>Selecciona una opción</p>}
      </div>
    </div>
  );
};

export default HomePage;
