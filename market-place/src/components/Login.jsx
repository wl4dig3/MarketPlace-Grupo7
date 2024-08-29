import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Form from './Form';
import InputField from './InputField';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      login(email, password);
      setError(''); 
    } catch (err) {
      setError('Login fallido. Por favor verifica tus credenciales e intenta de nuevo.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}  >
      <InputField  type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button
              type="submit"
              className="w-full rounded-full  bg-red-600 p-3 text-white transition hover:bg-opacity-90"
            >Iniciar Sesion</button>
      {error && <p className="text-danger">{error}</p>}
    </Form>
  );
};

export default Login;
