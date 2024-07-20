import { useState, useEffect } from 'react';

const useAuthenticate = () => {

  const [authenticated, setAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');


  const handlePasswordSubmit = (enteredPassword) => {
    if (enteredPassword === 'jn123') {
      localStorage.setItem('authenticated', 'true');
      setAuthenticated(true);
    } else {
      setErrorMsg('Wrong Password :p');
    }
  };

  useEffect(() => {
    // window.addEventListener('beforeunload', function() {
    //   localStorage.removeItem('authenticated');
    // });
    const storedAuthentication = localStorage.getItem('authenticated');
    if (storedAuthentication === 'true') {
      setAuthenticated(true);
    }
  }, []);


  return {
    authenticated,
    handlePasswordSubmit,
    errorMsg
  };
};

export { useAuthenticate };