import React from 'react';

const Form = ({ onSubmit, children }) => {
  return (
    <form 
      onSubmit={onSubmit} 
      className="p-4 border rounded shadow-sm bg-light mx-auto" 
      style={{ maxWidth: '400px' }}
    >
      {children}
    </form>
  );
};

export default Form;
