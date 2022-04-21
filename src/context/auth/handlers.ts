import { ErrorPayload, HTTPStatusCodes, ResponsePayload } from '../../types/request.types';
import { User, UserData } from '../../types/user.types';
import { setTokenToLocalStorage } from '../../utils/common';
import { getUserData, login, LoginParams, register, RegisterParams } from './api';
import { AuthCallback } from './types';

export const handleRegister = async (params: RegisterParams): Promise<void | ErrorPayload> => {
  const result = await register(params);

  if (result.status === HTTPStatusCodes.CREATED) {
    return;
  }

  return result as ErrorPayload;
};

export const handleLogout = (cb: () => void) => {
  setTokenToLocalStorage('');
  cb();
};

export const handleLogin = async (params: LoginParams, onSuccess: AuthCallback): Promise<void | ErrorPayload> => {
  const result = await login(params);

  if (result.status === HTTPStatusCodes.OK) {
    const { user, token } = (result as ResponsePayload<UserData>).data;

    setTokenToLocalStorage(token as string);
    onSuccess({
      token,
      user,
      authenticated: true
    });
  }

  return result as ErrorPayload;
};

export const getUser = async (token: string, onAuth: AuthCallback) => {
  const result = await getUserData(token);

  if (result.status === HTTPStatusCodes.OK) {
    onAuth({
      authenticated: true,
      user: (result as ResponsePayload<User>).data
    });
  } else {
    setTokenToLocalStorage('');
    onAuth({
      token: null
    });
  }
};
