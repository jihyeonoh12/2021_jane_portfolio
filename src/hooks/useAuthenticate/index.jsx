import { useState, useEffect } from 'react';

const useAuthenticate = () => {

  const [authenticated, setAuthenticated] = useState(false);

  const handlePasswordSubmit = (enteredPassword) => {
    if (enteredPassword === 'test') {
      localStorage.setItem('authenticated', 'true');
      setAuthenticated(true);
    } else {
      alert('Incorrect password. Please contact janenoh12@gmail.com for request :)');
    }
  };

  useEffect(() => {
    window.addEventListener('beforeunload', function() {
      localStorage.removeItem('authenticated');
    });
    const storedAuthentication = localStorage.getItem('authenticated');
    if (storedAuthentication === 'true') {
      setAuthenticated(true);
    }
  }, []);


  return {
    authenticated,
    handlePasswordSubmit
  };
};

export { useAuthenticate };