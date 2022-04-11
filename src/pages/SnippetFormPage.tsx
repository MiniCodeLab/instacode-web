import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SnippetForm, { SnippetParams } from '../components/SnippetForm';
import { SnippetContext } from '../context/snippet.context';

const SnippetFormPage = () => {
  const { createSnippet } = useContext(SnippetContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Crea un nuevo snippet</h1>
      <SnippetForm
        onSubmit={async (values: SnippetParams) => {
          createSnippet(values).then((status: boolean) => {
            if (status) {
              navigate('/snippets');
            }
          });
        }}
      />
    </div>
  );
};

export default SnippetFormPage;
