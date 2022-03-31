import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginParams, RegisterParams } from '../api/auth.api';
import Image from '../components/Image';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { AuthContext } from '../context/auth.context';
import { Button } from '../ui/Button';
import { Error } from '../ui/Error';
import { AuthenticateLayout, ErrorWrapper, FormWrapper, ToggleWrapper } from '../ui/layouts/AuthenticateLayout';

const Authenticate = () => {
  const [formVariant, setFormVariant] = useState<'register' | 'login'>('login');
  const [formError, setFormError] = useState<string | null>(null);
  const { user, login, register } = useContext(AuthContext);
  const navigate = useNavigate();

  // TODO: Create a HOC to handle NON AUTH routes
  useEffect(() => {
    if (user) {
      navigate('/styleguide');
    }
  }, [user]);

  const handleLogin = async (values: LoginParams) => {
    const errorPayload = await login(values);

    if (errorPayload) {
      setFormError(errorPayload.message);
    }
  };

  const handleRegister = async (values: RegisterParams) => {
    const errorPayload = await register(values);

    if (errorPayload) {
      setFormError(errorPayload.message);
    } else {
      // TODO: Propagate email to login after registeras
      setFormVariant('login');
    }
  };

  return (
    <AuthenticateLayout>
      <Image src="/logo-instacode.png" alt="logo-instacode" />

      <FormWrapper>
        <ToggleWrapper>
          <Button onClick={() => setFormVariant('register')} variant={formVariant === 'register' ? 'green' : 'purple'}>
            Registrarme
          </Button>
          <Button onClick={() => setFormVariant('login')} variant={formVariant === 'login' ? 'green' : 'purple'}>
            Iniciar Sesión
          </Button>
        </ToggleWrapper>

        {formError ? (
          <ErrorWrapper>
            <Error>{formError}</Error>
          </ErrorWrapper>
        ) : null}

        {formVariant === 'register' ? <RegisterForm onSubmit={handleRegister} /> : <LoginForm onSubmit={handleLogin} />}
      </FormWrapper>
    </AuthenticateLayout>
  );
};

export default Authenticate;
