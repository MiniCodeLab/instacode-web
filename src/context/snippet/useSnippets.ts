import { useCallback, useContext, useMemo, useState } from 'react';
import { Snippet, SnippetFormValues } from '../../types/snippet.types';
import { User } from '../../types/user.types';
import { AuthContext } from '../auth';
import { getSnippetAxios } from './api';
import { handleCreateSnippet, handleEditSnippet, handleGetOwnSnippets, handleGetSnippets } from './handlers';

const useSnippets = () => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [ownSnippets, setOwnSnippets] = useState<Snippet[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number | null>(1);

  const { token, user } = useContext(AuthContext);
  const axiosInstance = useMemo(() => getSnippetAxios(token as string), [token]);

  const updatePage = useCallback((newPage) => setPage(newPage), []);
  const updateSnippets = useCallback(
    (newSnippets) => setSnippets((prevSnippets) => [...prevSnippets, ...newSnippets]),
    []
  );

  const getOwnSnippets = async () => {
    setLoading(true);

    const result = await handleGetOwnSnippets(axiosInstance, setOwnSnippets, user as User);
    setLoading(false);
    return result;
  };

  const getSnippets = async () => {
    if (!page) return false;

    setLoading(true);
    const result = await handleGetSnippets(axiosInstance, page, updateSnippets, updatePage);
    setLoading(false);
    return result;
  };

  const findOwnSnippetById = (id: string) => {
    return ownSnippets.find((snippet) => snippet._id === id) || null;
  };

  return {
    createSnippet: (values: SnippetFormValues) => handleCreateSnippet(axiosInstance, values),
    editSnippet: (values: Snippet) => handleEditSnippet(axiosInstance, values),
    findOwnSnippetById,
    getOwnSnippets,
    getSnippets,
    loading,
    ownSnippets,
    page,
    snippets
  };
};

export default useSnippets;
