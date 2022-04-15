import { useCallback, useContext } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import SnippetForm, { SnippetParams } from '../components/SnippetForm';
import { SnippetContext } from '../context/snippet.context';
import { Snippet } from '../types/snippet.types';
import { CommonLayout } from '../ui/layouts/CommonLayout';
import { setErrorToast, setSuccessToast } from '../utils/toasts';

export type Props = {
  isEdit?: boolean;
};

const SnippetFormPage = ({ isEdit = false }: Props) => {
  const navigate = useNavigate();
  const { createSnippet, editSnippet, findOwnSnippetById } = useContext(SnippetContext);
  const { id: editSnippetId } = useParams();
  const defaultSnippet = findOwnSnippetById(editSnippetId as string);

  const submitNewSnippet = useCallback(async (values: SnippetParams) => {
    createSnippet(values).then((status: boolean) => {
      if (status) {
        setSuccessToast('Snippet creado con éxito');
        navigate('/snippets');
      } else {
        setErrorToast('Ha ocurrido un error al crear el snippet');
      }
    });
  }, []);

  const submitsnippetToEdit = useCallback(async (values: SnippetParams) => {
    editSnippet({
      ...defaultSnippet,
      ...values
    } as Snippet).then((status: boolean) => {
      if (status) {
        setSuccessToast('Snippet editado con éxito');
        navigate('/snippets?mode=owner');
      } else {
        setErrorToast('Ha ocurrido un error al editar el snippet');
      }
    });
  }, []);

  if (isEdit && !defaultSnippet) {
    return <Navigate to="/" />;
  }

  return (
    <CommonLayout>
      <h1>{isEdit ? 'Edita tu snippet' : 'Crea un nuevo snippet'}</h1>

      <SnippetForm
        isEdit={Boolean(editSnippetId && isEdit)}
        onSubmit={isEdit ? submitsnippetToEdit : submitNewSnippet}
        initialValues={defaultSnippet}
      />
    </CommonLayout>
  );
};

export default SnippetFormPage;
