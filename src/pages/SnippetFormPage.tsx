import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SnippetForm, { SnippetParams } from '../components/SnippetForm';
import { SnippetContext } from '../context/snippet.context';
import { setErrorToast, setSuccessToast } from '../utils/toasts';

const SnippetFormPage = () => {
  const { createSnippet } = useContext(SnippetContext);
  const navigate = useNavigate();

  const submitNewSnippet = async (values: SnippetParams) => {
    createSnippet(values).then((status: boolean) => {
      if (status) {
        setSuccessToast('Snippet creado con éxito');
        navigate('/snippets');
      } else {
        setErrorToast('Ha ocurrido un error al crear el snippet');
      }
    });
  };

  return (
    <div>
      <h1>Crea un nuevo snippet</h1>

      <SnippetForm onSubmit={submitNewSnippet} />
    </div>
  );
};

export default SnippetFormPage;
