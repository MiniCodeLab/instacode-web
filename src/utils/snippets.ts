import { SUPPORTED_LANGUAGES } from '../constants/supported-languages';
import { Snippet } from '../types/snippet.types';

export const getFilteredSnippets = (snippets: Snippet[], filter: string) => {
  const isValidFilter = SUPPORTED_LANGUAGES.includes(filter);
  return isValidFilter ? snippets.filter((snippet): boolean => snippet.language === filter) : snippets;
};
