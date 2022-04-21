import { ErrorPayload } from '../../types/request.types';
import { UserData } from '../../types/user.types';
import { LoginParams, RegisterParams } from './api';

export type AuthState = UserData & {
  authenticated: boolean;
};

export type AuthCallback = (newState: Partial<AuthState>) => void;

export type AuthContextState = {
  loading: boolean;
  register: (params: RegisterParams) => Promise<void | ErrorPayload>;
  login: (params: LoginParams) => Promise<void | ErrorPayload>;
  logout: () => void;
} & AuthState;
