
import React, { useState } from 'react';

const PasswordComponent = ({ onPasswordSubmit }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPasswordSubmit(password);
  };

  return (
    <div className='h-dvh w-full flex gap-2.5 justify-center items-center'>
    <div className='text-center p-10 max-w-[500px]'>
    <p>This content is password protected. Please enter your password below to view it</p>
      <form onSubmit={handleSubmit} className='p-5 fle gap-2.5 flex-col'>
        <label>
          Password:
        </label>
        <input className='w-full' type="password" value={password} onChange={handlePasswordChange} />

        <button type="submit">Enter</button>
      </form>
    </div>
    </div>
  );
};

export default PasswordComponent;