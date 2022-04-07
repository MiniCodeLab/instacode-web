import CodeBlock from '../components/CodeBlock';
import { snippets } from '../mocks/snippets';
import { Snippet, SnippetsGroup } from '../ui/Snippet';
import { Tag, TagGroup } from '../ui/Tag';

const Snippets = () => {
  return (
    <div>
      <h1>Snippets</h1>

      <SnippetsGroup>
        {snippets.map((snippet) => (
          <Snippet key={snippet._id}>
            <CodeBlock code={snippet.code} />

            <h3>
              {snippet.title} - @{snippet.author.username}
            </h3>

            <TagGroup>
              {/* TODO: Implementar tags desde el backend */}
              {snippet.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagGroup>

            <p>{snippet.description}</p>
          </Snippet>
        ))}
      </SnippetsGroup>
    </div>
  );
};

export default Snippets;
