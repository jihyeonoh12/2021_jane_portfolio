
import React, { useState } from 'react';

const PasswordComponent = ({ onPasswordSubmit, errorMsg }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    const userInput = (e.target.value).toLowerCase();
    setPassword(userInput);
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
        <label className='h4'>
          Password:
        </label>
        <input className='w-full' type="password" value={password} onChange={handlePasswordChange} />
        <button type="submit" className='rounded-lg bg-themeColor hover:bg-themeDark text-white px-5 py-4 btn w-full'>Enter</button>
        {errorMsg && (
          <p className='text-error font-bold'>{errorMsg}</p>
        )}
      </form>
    </div>
    </div>
  );
};

export default PasswordComponent;