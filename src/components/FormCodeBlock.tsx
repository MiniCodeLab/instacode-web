import { Control, useWatch } from 'react-hook-form';
import CodeBlock from './CodeBlock';

export type Props = {
  control: Control<Record<string, string>>;
};

const FormCodeBlock = ({ control }: Props) => {
  const [code, language] = useWatch({
    name: ['code', 'language'],
    control
  });

  return <CodeBlock code={code} language={language} />;
};

export default FormCodeBlock;
