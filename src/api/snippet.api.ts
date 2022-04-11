import axios, { AxiosError, AxiosInstance } from 'axios';
import { ErrorPayload, ErrorResponse, ResponsePayload } from '../types/request.types';
import { Snippet, SnippetFormValues } from '../types/snippet.types';

export const getSnippetAxios = (token: string): AxiosInstance =>
  axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

export const create = async (
  axiosInstance: AxiosInstance,
  params: SnippetFormValues
): Promise<ResponsePayload<Snippet> | ErrorPayload> => {
  try {
    const response = await axiosInstance.post<Snippet>('code', params);

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

export const getPaginated = async (
  axiosInstance: AxiosInstance,
  params: { page: number }
): Promise<ResponsePayload<Snippet[]> | ErrorPayload> => {
  try {
    const response = await axiosInstance.get<{ data: { codes: Snippet[] } }>(`code?page=${params.page}`);
    console.log(response);
    return {
      status: response.status,
      data: response.data.data.codes
    };
  } catch (error) {
    const { status, data } = (error as AxiosError).response as ErrorResponse;

    return {
      status,
      message: data
    } as ErrorPayload;
  }
};
