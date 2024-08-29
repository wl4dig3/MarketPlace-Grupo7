import React from 'react';

const Form = ({ onSubmit, children }) => {
  return (
    <form 
      onSubmit={onSubmit} 
      className="p-4 mx-auto max-w-[400]  flex flex-col justify-around gap-3" 
      
    >
      {children}
    </form>
  );
};

export default Form;
