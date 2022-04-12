import { useContext, useEffect, useRef } from 'react';
import { SnippetContext } from '../context/snippet.context';
import useDebounceFn from '../hooks/useDebounceFn';
import { Snippet as SnippetType } from '../types/snippet.types';
import { Snippet, SnippetsGroup } from '../ui/Snippet';
import { Tag, TagGroup } from '../ui/Tag';
import CodeBlock from './CodeBlock';

type Props = {
  snippets: SnippetType[];
};

const SnippetList = ({ snippets }: Props) => {
  const { getSnippets, loading } = useContext(SnippetContext);
  const getSnippetsDebounced = useDebounceFn(getSnippets, 200);

  const hiddenDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleScroll() {
      if (loading) return;

      const windowHeight = window.innerHeight;
      const divTop = hiddenDivRef.current?.getBoundingClientRect().top as number;

      if (divTop - 200 <= windowHeight) {
        getSnippetsDebounced();
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <SnippetsGroup>
      {snippets.map((snippet) => (
        <Snippet key={snippet._id}>
          <CodeBlock language={snippet.language} code={snippet.code} />

          <h3>{snippet.title}</h3>

          <h4>@{snippet.author.username}</h4>

          <p>{snippet.description}</p>

          <TagGroup>
            {/* TODO: Implementar tags desde el backend */}
            <Tag>{snippet.language}</Tag>
          </TagGroup>
        </Snippet>
      ))}

      <div ref={hiddenDivRef} style={{ display: 'hidden' }} />
    </SnippetsGroup>
  );
};

export default SnippetList;
