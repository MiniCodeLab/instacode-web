import { createContext, ReactNode, useEffect, useState } from 'react';
import { getUserData, login, LoginParams, register, RegisterParams } from '../api/auth.api';
import { ErrorPayload, HTTPStatusCodes, ResponsePayload } from '../types/request.types';
import { User, UserData } from '../types/user.types';
import { getTokenFromLocalStorage, setTokenToLocalStorage } from '../utils/common';

export type AuthContextState = UserData & {
  authenticated: boolean;
};

export type AuthContextType = {
  loading: boolean;
  register: (params: RegisterParams) => Promise<void | ErrorPayload>;
  login: (params: LoginParams) => Promise<void | ErrorPayload>;
  logout: () => void;
} & AuthContextState;

const initialState = {
  authenticated: false,
  token: null,
  user: null
};

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  loading: false,
  register: async () => {},
  login: async () => {},
  logout: () => {}
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthContextState>(() => {
    const storedToken = getTokenFromLocalStorage();
    return { ...initialState, token: storedToken || null };
  });
  const [loading, setLoading] = useState(() => !!auth.token);

  useEffect(() => {
    async function getUser() {
      const result = await getUserData(auth.token as string);

      if (result.status === HTTPStatusCodes.OK) {
        setAuth({
          ...auth,
          authenticated: true,
          user: (result as ResponsePayload<User>).data
        });
      } else {
        setTokenToLocalStorage('');
        setAuth({
          ...auth,
          token: null
        });
      }

      setLoading(false);
    }

    if (auth.token) {
      getUser();
    }
  }, []);

  const handleRegister = async (params: RegisterParams): Promise<void | ErrorPayload> => {
    const result = await register(params);

    if (result.status === HTTPStatusCodes.CREATED) {
      return;
    }

    return result as ErrorPayload;
  };

  const handleLogin = async (params: LoginParams): Promise<void | ErrorPayload> => {
    const result = await login(params);

    if (result.status === HTTPStatusCodes.OK) {
      const { user, token } = (result as ResponsePayload<UserData>).data;

      setTokenToLocalStorage(token as string);

      setAuth((prevAuth) => ({
        ...prevAuth,
        token,
        user,
        authenticated: true
      }));
    }

    return result as ErrorPayload;
  };

  const handleLogout = () => {
    setTokenToLocalStorage('');
    setAuth(initialState);
  };

  return (
    <AuthContext.Provider
      value={{
        ...auth,
        loading,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
