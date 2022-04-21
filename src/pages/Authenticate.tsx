import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginParams, RegisterParams } from '../context/auth/api';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { AuthContext } from '../context/auth';
import { Button } from '../ui/Button';
import { AuthenticateLayout, FormWrapper, ToggleWrapper } from '../ui/layouts/AuthenticateLayout';
import { setErrorToast } from '../utils/toasts';

const Authenticate = () => {
  const [userEmail, setUserEmail] = useState('');
  const [formVariant, setFormVariant] = useState<'register' | 'login'>('login');
  const { authenticated, login, register } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate('/snippets');
    }
  }, [authenticated]);

  const handleLogin = async (values: LoginParams) => {
    const errorPayload = await login(values);

    if (errorPayload) {
      setErrorToast(errorPayload.message);
    }
  };

  const handleRegister = async (values: RegisterParams) => {
    const errorPayload = await register(values);

    if (errorPayload) {
      setErrorToast(errorPayload.message);
    } else {
      setUserEmail(values.email);
      setFormVariant('login');
    }
  };

  return (
    <AuthenticateLayout>
      <img src="/logo-instacode-xl.png" alt="logo-instacode" />

      <FormWrapper>
        <ToggleWrapper>
          <Button onClick={() => setFormVariant('register')} variant={formVariant === 'register' ? 'green' : 'purple'}>
            Registrarme
          </Button>
          <Button onClick={() => setFormVariant('login')} variant={formVariant === 'login' ? 'green' : 'purple'}>
            Iniciar Sesión
          </Button>
        </ToggleWrapper>

        {formVariant === 'register' ? (
          <RegisterForm onSubmit={handleRegister} />
        ) : (
          <LoginForm onSubmit={handleLogin} userEmail={userEmail} />
        )}
      </FormWrapper>
    </AuthenticateLayout>
  );
};

export default Authenticate;
