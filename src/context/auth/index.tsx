import { createContext, ReactNode, useEffect, useState } from 'react';
import { AuthContextState } from './types';
import useAuth, { initialState } from './useAuth';

export const authContextInitialState = {
  ...initialState,
  loading: false,
  register: async () => {},
  login: async () => {},
  logout: () => {}
};

export const AuthContext = createContext<AuthContextState>(authContextInitialState);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const { auth, getUser, handleLogin, handleLogout, handleRegister } = useAuth();
  const [loading, setLoading] = useState(() => !!auth.token);

  useEffect(() => {
    if (auth.token) {
      getUser().finally(() => setLoading(false));
    }
  }, []);

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
