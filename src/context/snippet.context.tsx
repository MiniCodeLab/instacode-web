import React, { createContext, useContext, useMemo, useState } from 'react';
import { create, getSnippetAxios, getPaginated } from '../api/snippet.api';
import { HTTPStatusCodes, ResponsePayload } from '../types/request.types';
import { Snippet, SnippetFormValues } from '../types/snippet.types';
import { AuthContext } from './auth.context';

export type SnippetContextType = {
  snippets: Snippet[];
  page: number;
  getSnippets: () => Promise<boolean>;
  createSnippet: (values: SnippetFormValues) => Promise<boolean>;
};

export const SnippetContext = createContext<SnippetContextType>({
  snippets: [],
  page: 1,
  getSnippets: async () => false,
  createSnippet: async () => false
});

export const SnippetContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);

  const { token } = useContext(AuthContext);
  const axiosInstance = useMemo(() => getSnippetAxios(token as string), [token]);

  const getSnippets = async () => {
    const response = await getPaginated(axiosInstance, { page: 1 });
    console.log(response);

    if (response.status === HTTPStatusCodes.OK) {
      const newSnippets = (response as ResponsePayload<Snippet[]>).data;
      setSnippets((prevSnippets) => [...prevSnippets, ...newSnippets]);
      return true;
    }

    // TODO: Handle error...
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
        getSnippets
      }}
    >
      {children}
    </SnippetContext.Provider>
  );
};
