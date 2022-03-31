import { useForm } from 'react-hook-form';
import { RegisterParams } from '../api/auth.api';
import { Button } from '../ui/Button';
import { Error } from '../ui/Error';
import { Form, Label } from '../ui/form/Form';
import { Input, Select } from '../ui/form/Input';
import { emailValidations, emojis, passwordValidations } from '../utils/form';

export type Props = {
  onSubmit: (values: RegisterParams) => Promise<void>;
};

const RegisterForm = ({ onSubmit }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      emoji: ''
    }
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Input
          hasError={!!errors.username}
          type="username"
          placeholder="Nombre de usuario"
          {...register('username', emailValidations)}
        />

        {errors.username ? <Error>{errors.username.message}</Error> : null}
      </Label>

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

      <Label>
        <Select hasError={!!errors.emoji} {...register('emoji', emailValidations)} defaultValue="">
          <option value="">Elige el emoji que te representa 🤡</option>

          {emojis.map((emoji) => (
            <option key={emoji} value={emoji}>
              {emoji}
            </option>
          ))}
        </Select>

        {errors.emoji ? <Error>{errors.emoji.message}</Error> : null}
      </Label>

      <Button type="submit">Entrar</Button>
    </Form>
  );
};

export default RegisterForm;
