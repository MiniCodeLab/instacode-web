import axios from 'axios';
import { ErrorPayload, ResponsePayload } from '../../types/request.types';
import { User, UserData } from '../../types/user.types';
import { apiTryCatchHandler } from '../../utils/api';

export type LoginParams = {
  email: string;
  password: string;
};

export type RegisterParams = {
  username: string;
  emoji: string;
} & LoginParams;

const authAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  withCredentials: true
});

export const register = async (params: RegisterParams): Promise<ResponsePayload<User> | ErrorPayload> =>
  apiTryCatchHandler(async () => {
    const response = await authAxios.post<User>('user', params);
    return {
      status: response.status,
      data: response.data
    };
  });

export const login = async (params: LoginParams): Promise<ResponsePayload<UserData> | ErrorPayload> =>
  apiTryCatchHandler(async () => {
    const response = await authAxios.post<UserData>('user/login', params);
    return {
      status: response.status,
      data: response.data
    };
  });

export const getUserData = async (token: string): Promise<ResponsePayload<User> | ErrorPayload> =>
  apiTryCatchHandler(async () => {
    const response = await authAxios.get<{ data: User }>('user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return {
      status: response.status,
      data: response.data.data
    };
  });
