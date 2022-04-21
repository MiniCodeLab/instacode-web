import { AxiosError } from 'axios';
import { ErrorResponse, ErrorPayload, ResponsePayload } from '../types/request.types';

export const apiTryCatchHandler = async <T>(
  request: () => Promise<ResponsePayload<T>>
): Promise<ResponsePayload<T> | ErrorPayload> => {
  try {
    return await request();
  } catch (error) {
    const { status, data } = (error as AxiosError).response as ErrorResponse;

    return {
      status,
      message: data
    } as ErrorPayload;
  }
};
