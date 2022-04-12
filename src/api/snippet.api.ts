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

export type GetPaginatedPayload = {
  codes: Snippet[];
  nextPage?: number;
};

export const getPaginated = async (
  axiosInstance: AxiosInstance,
  params: { page: number }
): Promise<ResponsePayload<GetPaginatedPayload> | ErrorPayload> => {
  try {
    const response = await axiosInstance.get<{ data: GetPaginatedPayload }>(`code?page=${params.page}`);

    const { codes, nextPage } = response.data.data;
    return {
      status: response.status,
      data: {
        codes,
        nextPage
      }
    };
  } catch (error) {
    const { status, data } = (error as AxiosError).response as ErrorResponse;

    return {
      status,
      message: data
    } as ErrorPayload;
  }
};
