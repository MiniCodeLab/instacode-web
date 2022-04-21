import React, { createContext } from 'react';
import { Snippet, SnippetFormValues } from '../../types/snippet.types';
import useSnippets from './useSnippets';

export type SnippetContextType = {
  snippets: Snippet[];
  ownSnippets: Snippet[];
  page: number | null;
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
  const snippets = useSnippets();
  return <SnippetContext.Provider value={snippets}>{children}</SnippetContext.Provider>;
};
