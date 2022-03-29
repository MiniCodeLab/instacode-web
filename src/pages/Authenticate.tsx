import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const Authenticate = () => {
  const { user, token, login } = useContext(AuthContext);

  const handleRegister = () => {
    // TODO: Handle form submit

    login({
      email: 'minicodelab+3@minicodelab.com',
      password: '1234asdF.'
    });
  };

  console.log('Authenticate', { user, token });

  return (
    <div>
      <h1>Authenticate</h1>

      {/* TODO: Add register/login form */}
      <button onClick={handleRegister}>Regístrate!</button>
    </div>
  );
};

export default Authenticate;
