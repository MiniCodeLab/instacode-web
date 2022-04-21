import axios, { AxiosError } from 'axios';
import { ErrorPayload, ErrorResponse, ResponsePayload } from '../../types/request.types';
import { User, UserData } from '../../types/user.types';

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

export const register = async (params: RegisterParams): Promise<ResponsePayload<User> | ErrorPayload> => {
  try {
    const response = await authAxios.post<User>('user', params);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    const { status, data } = (error as AxiosError).response as ErrorResponse;

    return {
      status,
      message: data
    } as ErrorPayload;
  }
};

export const login = async (params: LoginParams): Promise<ResponsePayload<UserData> | ErrorPayload> => {
  try {
    const response = await authAxios.post<UserData>('user/login', params);
    return {
      status: response.status,
      data: response.data
    };
  } catch (error) {
    const { status, data } = (error as AxiosError).response as ErrorResponse;

    return {
      status,
      message: data
    } as ErrorPayload;
  }
};

export const getUserData = async (token: string): Promise<ResponsePayload<User> | ErrorPayload> => {
  try {
    const response = await authAxios.get<{ data: User }>('user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return {
      status: response.status,
      data: response.data.data
    };
  } catch (error) {
    const { status, data } = (error as AxiosError).response as ErrorResponse;

    return {
      status,
      message: data
    } as ErrorPayload;
  }
};
