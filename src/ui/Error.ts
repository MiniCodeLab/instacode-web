import styled from '@emotion/styled';

type ErrorSize = 's' | 'm' | 'l' | 'xl';
const fontSizeBySize = {
  s: 'font-size: 0.75rem',
  m: 'font-size: 1rem',
  l: 'font-size: 2rem',
  xl: 'font-size: 3rem'
};

export const Error = styled.p<{ size?: ErrorSize }>`
  color: var(--error);
  ${({ size }) => fontSizeBySize[size || 'm']};
`;
