import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SUPPORTED_LANGUAGES } from '../constants/supported-languages';
import { Snippet } from '../types/snippet.types';
import { Button } from '../ui/Button';
import { Form } from '../ui/form/Form';
import { Input, Select, TextArea } from '../ui/form/Input';
import { requiredValidation } from '../utils/form';
import FormCodeBlock, { Props as FormCodeBlockProps } from './FormCodeBlock';
import FormField from './FormField';

export type SnippetParams = {
  title: string;
  code: string;
  description: string;
  language: string;
};

export type Props = {
  onSubmit: (values: SnippetParams) => Promise<void>;
  initialValues: Snippet | null;
  isEdit?: boolean;
};

const SnippetForm = ({ onSubmit, initialValues, isEdit = false }: Props) => {
  const defaultValues = {
    title: initialValues?.title || '',
    code: initialValues?.code || '',
    language: initialValues?.language || '',
    description: initialValues?.description || ''
  };

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues
  });

  // When toggling between edit/create forms, reset the values to prevent ref values issues
  useEffect(() => {
    if (!isEdit) {
      reset(defaultValues);
    }
  }, [isEdit]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField error={errors.title?.message}>
        <Input hasError={!!errors.title} type="text" placeholder="Título" {...register('title', requiredValidation)} />
      </FormField>

      <FormField error={errors.language?.message}>
        <Select hasError={!!errors.language} {...register('language', requiredValidation)} defaultValue="">
          <option value="">Lenguaje de código</option>

          {SUPPORTED_LANGUAGES.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField error={errors.code?.message}>
        <TextArea
          rows={10}
          hasError={!!errors.code}
          placeholder="Escribe tu código!"
          {...register('code', requiredValidation)}
        />
      </FormField>

      <FormCodeBlock control={control as unknown as FormCodeBlockProps['control']} />

      <FormField error={errors.description?.message}>
        <TextArea
          hasError={!!errors.description}
          placeholder="Describe tu snippet"
          {...register('description', requiredValidation)}
        />
      </FormField>

      <Button type="submit">{isEdit ? 'Editar snippet' : 'Crear snippet'}</Button>
    </Form>
  );
};

export default SnippetForm;
