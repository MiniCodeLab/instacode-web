import styled from '@emotion/styled';
import { useContext, useEffect, useState } from 'react';
import SnippetList from '../components/SnippetList';
import { SUPPORTED_LANGUAGES } from '../constants/supported-languages';
import { SnippetContext } from '../context/snippet.context';
import { Label } from '../ui/form/Form';
import { Select } from '../ui/form/Input';
import { getFilteredSnippets } from '../utils/snippets';

const Snippets = () => {
  const [filter, setFilter] = useState('');
  const { getSnippets, snippets } = useContext(SnippetContext);

  useEffect(() => {
    getSnippets();
  }, []);

  const filteredSnippets = getFilteredSnippets(snippets, filter);

  return (
    <div>
      <h1>Snippets</h1>

      <SnippetListWrapper>
        <Label>
          <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">Filtrar por lenguaje 🔍</option>

            {SUPPORTED_LANGUAGES.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </Select>
        </Label>

        <SnippetList snippets={filteredSnippets} />
      </SnippetListWrapper>
    </div>
  );
};

const SnippetListWrapper = styled.div``;

export default Snippets;
