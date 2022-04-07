import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Code } from '../ui/Snippet';

export type Props = {
  code: string;
};

const CodeBlock = ({ code }: Props) => {
  return (
    <Code>
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {code}
      </SyntaxHighlighter>
    </Code>
  );
};

export default CodeBlock;
