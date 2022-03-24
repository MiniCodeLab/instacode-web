import React, { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const Authenticate = () => {
  const { register } = useContext(AuthContext);

  const handleRegister = () => {
    // TODO: Handle form submit

    register({
      email: 'minicodelab+1@minicodelab.com',
      emoji: '💃',
      password: '1234asdF.',
      username: 'MiniCodeLab-1',
    });
  };

  return (
    <div>
      <h1>Authenticate</h1>

      {/* TODO: Add register/login form */}
      <button onClick={handleRegister}>Regístrate!</button>
    </div>
  );
};

export default Authenticate;
