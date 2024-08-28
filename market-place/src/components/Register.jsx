import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Form from './Form';
import InputField from './InputField';

const Register = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      register({ username, email, phone_number: phoneNumber, date_of_birth: dateOfBirth, password });
      setError('');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <InputField type="text" placeholder="Date of Birth (dd/mm/yyyy)" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
      <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className="btn btn-primary">Register</button>
      {error && <p className="text-danger">{error}</p>}
    </Form>
  );
};

export default Register;
