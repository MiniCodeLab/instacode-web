import { useContext, useEffect } from 'react';
import CodeBlock from '../components/CodeBlock';
import { SnippetContext } from '../context/snippet.context';
import { Snippet, SnippetsGroup } from '../ui/Snippet';
import { Tag, TagGroup } from '../ui/Tag';

const Snippets = () => {
  const { getSnippets, snippets } = useContext(SnippetContext);

  useEffect(() => {
    getSnippets();
  }, []);

  return (
    <div>
      <h1>Snippets</h1>

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
      </SnippetsGroup>
    </div>
  );
};

export default Snippets;
