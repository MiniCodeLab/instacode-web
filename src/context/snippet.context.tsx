import React, { createContext, useContext, useMemo, useState } from 'react';
import { create, getSnippetAxios, getPaginated, GetPaginatedPayload } from '../api/snippet.api';
import { HTTPStatusCodes, ResponsePayload } from '../types/request.types';
import { Snippet, SnippetFormValues } from '../types/snippet.types';
import { setErrorToast } from '../utils/toasts';
import { AuthContext } from './auth.context';

export type SnippetContextType = {
  snippets: Snippet[];
  page: number;
  loading: boolean;
  getSnippets: () => Promise<boolean>;
  createSnippet: (values: SnippetFormValues) => Promise<boolean>;
};

export const SnippetContext = createContext<SnippetContextType>({
  snippets: [],
  page: 1,
  loading: false,
  getSnippets: async () => false,
  createSnippet: async () => false
});

export const SnippetContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number | null>(1);

  const { token } = useContext(AuthContext);
  const axiosInstance = useMemo(() => getSnippetAxios(token as string), [token]);

  const getSnippets = async () => {
    if (!page) return false;

    setLoading(true);

    const response = await getPaginated(axiosInstance, { page });

    if (response.status === HTTPStatusCodes.OK) {
      const { codes, nextPage } = (response as ResponsePayload<GetPaginatedPayload>).data;
      setSnippets((prevSnippets) => [...prevSnippets, ...codes]);
      setPage(nextPage || null);
      setLoading(false);
      return true;
    }

    setErrorToast('Ha ocurrido un error cargando los snippets! 💀');
    setLoading(false);
    return false;
  };

  const createSnippet = async (values: SnippetFormValues): Promise<boolean> => {
    const response = await create(axiosInstance, values);

    if (response.status === HTTPStatusCodes.CREATED) {
      return true;
    }

    // TODO: Handle error...
    return false;
  };

  return (
    <SnippetContext.Provider
      value={{
        snippets,
        page: 1,
        createSnippet,
        getSnippets,
        loading
      }}
    >
      {children}
    </SnippetContext.Provider>
  );
};
