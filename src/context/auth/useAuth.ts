import { useCallback, useState } from 'react';
import { getTokenFromLocalStorage } from '../../utils/common';
import { LoginParams } from './api';
import { getUser, handleLogin, handleLogout, handleRegister } from './handlers';
import { AuthState } from './types';

export const initialState = {
  authenticated: false,
  token: null,
  user: null
};

const useAuth = () => {
  const [auth, setAuth] = useState<AuthState>(() => {
    const storedToken = getTokenFromLocalStorage();
    return { ...initialState, token: storedToken || null };
  });

  const resetState = useCallback(() => setAuth(initialState), []);
  const updateState = useCallback((newState: Partial<AuthState>) => {
    setAuth((prevAuth) => ({
      ...prevAuth,
      ...newState
    }));
  }, []);

  return {
    auth,
    handleRegister,
    handleLogin: (params: LoginParams) => handleLogin(params, updateState),
    handleLogout: () => handleLogout(resetState),
    getUser: () => getUser(auth.token as string, updateState)
  };
};

export default useAuth;
