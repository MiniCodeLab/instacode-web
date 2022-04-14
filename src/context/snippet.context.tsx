import React, { createContext, useContext, useMemo, useState } from 'react';
import { create, edit, getPaginated, GetPaginatedPayload, getSnippetAxios, loadOwnSnippets } from '../api/snippet.api';
import { HTTPStatusCodes, ResponsePayload } from '../types/request.types';
import { Snippet, SnippetAuthor, SnippetFormValues } from '../types/snippet.types';
import { setErrorToast } from '../utils/toasts';
import { AuthContext } from './auth.context';

export type SnippetContextType = {
  snippets: Snippet[];
  ownSnippets: Snippet[];
  page: number;
  loading: boolean;
  createSnippet: (values: SnippetFormValues) => Promise<boolean>;
  editSnippet: (values: Snippet) => Promise<boolean>;
  findOwnSnippetById: (id: string) => Snippet | null;
  getOwnSnippets: () => Promise<boolean>;
  getSnippets: () => Promise<boolean>;
};

export const SnippetContext = createContext<SnippetContextType>({
  snippets: [],
  ownSnippets: [],
  page: 1,
  loading: false,
  createSnippet: async () => false,
  editSnippet: async () => false,
  findOwnSnippetById: () => null,
  getOwnSnippets: async () => false,
  getSnippets: async () => false
});

export const SnippetContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [ownSnippets, setOwnSnippets] = useState<Snippet[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number | null>(1);

  const { token, user } = useContext(AuthContext);
  const axiosInstance = useMemo(() => getSnippetAxios(token as string), [token]);

  const getOwnSnippets = async () => {
    setLoading(true);

    const response = await loadOwnSnippets(axiosInstance);

    if (response.status === HTTPStatusCodes.OK) {
      const { codes } = (response as ResponsePayload<GetPaginatedPayload>).data;

      const codesWithAuthor = codes.map((code) => ({
        ...code,
        author: user as SnippetAuthor
      }));

      setOwnSnippets(codesWithAuthor);
      setLoading(false);
      return true;
    }

    setErrorToast('Ha ocurrido un error cargando tus snippets! 💀');
    setLoading(false);
    return false;
  };

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

  const editSnippet = async (values: Snippet): Promise<boolean> => {
    const response = await edit(axiosInstance, values);

    if (response.status === HTTPStatusCodes.OK) {
      return true;
    }

    // TODO: Handle error...
    return false;
  };

  const findOwnSnippetById = (id: string) => {
    return ownSnippets.find((snippet) => snippet._id === id) || null;
  };

  return (
    <SnippetContext.Provider
      value={{
        snippets,
        ownSnippets,
        page: 1,
        createSnippet,
        editSnippet,
        getSnippets,
        getOwnSnippets,
        findOwnSnippetById,
        loading
      }}
    >
      {children}
    </SnippetContext.Provider>
  );
};
