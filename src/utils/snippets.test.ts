import { JSX_SNIPPET, SNIPPETS_RESPONSE } from '../fixtures/snippets';
import { getFilteredSnippets } from './snippets';

describe('getFilteredSnippets', () => {
  it('should return an empty array if it receives an empty array', () => {
    const result = getFilteredSnippets([], '');
    expect(result).toStrictEqual([]);
  });

  it('should return the same array if empty filter is passed', () => {
    const result = getFilteredSnippets(SNIPPETS_RESPONSE, '');
    expect(result).toStrictEqual(SNIPPETS_RESPONSE);
  });

  it('should return the same array if filter is not a language', () => {
    const result = getFilteredSnippets(SNIPPETS_RESPONSE, 'desarrolloutil');
    expect(result).toStrictEqual(SNIPPETS_RESPONSE);
  });

  it('should return the filtered array if filter is a language', () => {
    const result = getFilteredSnippets(SNIPPETS_RESPONSE, 'jsx');
    expect(result).toStrictEqual([JSX_SNIPPET]);
  });
});
