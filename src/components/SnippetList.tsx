import { useContext } from 'react';
import { SnippetContext } from '../context/snippet';
import useDebounceFn from '../hooks/useDebounceFn';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { Snippet as SnippetType } from '../types/snippet.types';
import { Snippet, SnippetsGroup } from '../ui/Snippet';
import { Tag, TagGroup } from '../ui/Tag';
import EditableCodeBlock from './EditableCodeBlock';

type Props = {
  isFilterApplied?: boolean;
  snippets: SnippetType[];
};

const SnippetList = ({ snippets, isFilterApplied = false }: Props) => {
  const { getSnippets, loading } = useContext(SnippetContext);
  const getSnippetsDebounced = useDebounceFn(getSnippets, 200);

  const hiddenDivRef = useInfiniteScroll({
    callback: getSnippetsDebounced,
    loading,
    handlersEnabled: !isFilterApplied
  });

  return (
    <>
      <SnippetsGroup>
        {snippets.map((snippet) => (
          <Snippet key={snippet._id}>
            <EditableCodeBlock snippet={snippet} />

            <h3>{snippet.title}</h3>

            <h4>@{snippet.author.username}</h4>

            <p>{snippet.description}</p>

            <TagGroup>
              {/* TODO: Implementar tags desde el backend */}
              <Tag>{snippet.language}</Tag>
            </TagGroup>
          </Snippet>
        ))}
      </SnippetsGroup>

      <div ref={hiddenDivRef} style={{ display: 'hidden' }} />
    </>
  );
};

export default SnippetList;
