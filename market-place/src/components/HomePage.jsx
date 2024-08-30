import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import Form from './Form';

const HomePage = () => {
  const [formType, setFormType] = useState('none');

  const handleShowForm = (formType) => {
    setFormType(formType);
  };

  return (
    <div className="container h-[90%] mt-4 flex flex-col justify-center">

      <div className="btn-group ">
        <button className="btn btn-primary" onClick={() => handleShowForm('register')}>Register</button>
        <button className="btn btn-secondary" onClick={() => handleShowForm('login')}>Login</button>
      </div>
      <div className="mt-4 ">
        {formType === 'register' && <Register />}
        {formType === 'login' && <Login />}
       {formType === 'none' && <p>Selecciona una opción</p>} 
      </div>
      <Form/>
    </div>
  );
};

export default HomePage;
