import { useForm } from 'react-hook-form';
import { LoginParams } from '../api/auth.api';
import { Button } from '../ui/Button';
import { Error } from '../ui/Error';
import { Form, Label } from '../ui/form/Form';
import { Input } from '../ui/form/Input';
import { emailValidations, passwordValidations } from '../utils/form';

export type Props = {
  onSubmit: (values: LoginParams) => Promise<void>;
};

const LoginForm = ({ onSubmit }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Input
          hasError={!!errors.email}
          type="email"
          placeholder="Correo electrónico"
          {...register('email', emailValidations)}
        />

        {errors.email ? <Error>{errors.email.message}</Error> : null}
      </Label>

      <Label>
        <Input
          type="password"
          hasError={!!errors.password}
          placeholder="Contraseña"
          {...register('password', passwordValidations)}
        />

        {errors.password ? <Error>{errors.password.message}</Error> : null}
      </Label>

      <Button type="submit">Entrar</Button>
    </Form>
  );
};

export default LoginForm;
