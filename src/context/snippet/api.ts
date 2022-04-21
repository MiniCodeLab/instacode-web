import axios, { AxiosInstance } from 'axios';
import { ErrorPayload, ResponsePayload } from '../../types/request.types';
import { Snippet, SnippetFormValues } from '../../types/snippet.types';
import { apiTryCatchHandler } from '../../utils/api';

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
): Promise<ResponsePayload<Snippet> | ErrorPayload> =>
  apiTryCatchHandler(async () => {
    const response = await axiosInstance.post<Snippet>('code', params);

    return {
      status: response.status,
      data: response.data
    };
  });

export const edit = async (
  axiosInstance: AxiosInstance,
  params: Snippet
): Promise<ResponsePayload<Snippet> | ErrorPayload> =>
  apiTryCatchHandler(async () => {
    const response = await axiosInstance.patch<Snippet>(`code/${params._id}`, params);

    return {
      status: response.status,
      data: response.data
    };
  });

export type GetPaginatedPayload = {
  codes: Snippet[];
  nextPage?: number;
};

export const getPaginated = async (
  axiosInstance: AxiosInstance,
  params: { page: number }
): Promise<ResponsePayload<GetPaginatedPayload> | ErrorPayload> =>
  apiTryCatchHandler(async () => {
    const response = await axiosInstance.get<{ data: GetPaginatedPayload }>(`code?page=${params.page}`);

    const { codes, nextPage } = response.data.data;
    return {
      status: response.status,
      data: {
        codes,
        nextPage
      }
    };
  });

export const loadOwnSnippets = async (
  axiosInstance: AxiosInstance
): Promise<ResponsePayload<GetPaginatedPayload> | ErrorPayload> =>
  apiTryCatchHandler(async () => {
    const response = await axiosInstance.get<{ data: GetPaginatedPayload }>('code/user');

    const { codes } = response.data.data;
    return {
      status: response.status,
      data: {
        codes
      }
    };
  });
