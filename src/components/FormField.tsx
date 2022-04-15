import React from 'react';
import { Error } from '../ui/Error';
import { Label } from '../ui/form/Form';

export type Props = {
  children: React.ReactNode;
  error?: string;
};

const FormField = ({ children, error }: Props) => {
  return (
    <Label>
      {children}

      {error ? <Error>{error}</Error> : null}
    </Label>
  );
};

export default FormField;
