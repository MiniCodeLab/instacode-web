import { createContext, ReactNode, useState } from 'react';
import { HTTPStatusCodes, ResponsePayload } from '../types/request.types';
import { User, UserData } from '../types/user.types';
import { LoginParams, register, login, RegisterParams } from '../api/auth.api';
import { getTokenFromLocalStorage, setTokenToLocalStorage } from '../utils/common';

export type AuthContextState = UserData & {
  authenticated: boolean;
};

export type AuthContextType = {
  register: (params: RegisterParams) => Promise<unknown>;
  login: (params: LoginParams) => Promise<unknown>;
} & AuthContextState;

const initialState = {
  authenticated: false,
  token: null,
  user: null
};

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  register: async () => {},
  login: async () => {}
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthContextState>(() => {
    const storedToken = getTokenFromLocalStorage();
    return { ...initialState, token: storedToken };
  });

  const handleRegister = async (params: RegisterParams) => {
    const result = await register(params);

    if (result.status === HTTPStatusCodes.CREATED) {
      setAuth((prevAuth) => ({
        ...prevAuth,
        user: (result as ResponsePayload<User>).data
      }));
    }
  };

  const handleLogin = async (params: LoginParams) => {
    const result = await login(params);

    if (result.status === HTTPStatusCodes.OK) {
      const { user, token } = (result as ResponsePayload<UserData>).data;

      setTokenToLocalStorage(token as string);

      setAuth((prevAuth) => ({
        ...prevAuth,
        token,
        user
      }));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...auth,
        login: handleLogin,
        register: handleRegister
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
