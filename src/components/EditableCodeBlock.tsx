import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Snippet } from '../types/snippet.types';
import { InstaLink } from '../ui/InstaLink';
import { EditableBlockWrapper } from '../ui/Snippet';
import CodeBlock from './CodeBlock';

export type Props = {
  snippet: Snippet;
};

const EditableCodeBlock = ({ snippet }: Props) => {
  const { user } = useContext(AuthContext);

  return (
    <EditableBlockWrapper>
      <CodeBlock language={snippet.language} code={snippet.code} />

      {user?._id === snippet.author._id ? <InstaLink to={`/edit/snippet/${snippet._id}`}>Editar 📝</InstaLink> : null}
    </EditableBlockWrapper>
  );
};

export default EditableCodeBlock;
