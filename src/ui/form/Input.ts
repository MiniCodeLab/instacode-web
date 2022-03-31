import { css } from '@emotion/react';
import styled from '@emotion/styled';

const errorInput = css`
  border: 2px solid var(--error);
  margin-bottom: 1.25rem;
`;

const sharedCss = css`
  border-radius: var(--border-radius);
  border: 2px solid var(--purple);
  color: var(--dark);
  max-width: var(--input-width);
  padding: var(--padding-xs);
  width: 100%;

  &:placeholder {
    color: var(--paragraph);
  }
`;

export const Input = styled.input<{ hasError?: boolean }>`
  ${sharedCss}
  ${({ hasError }) => (hasError ? errorInput : '')}
`;

export const Select = styled.select<{ hasError?: boolean }>`
  ${sharedCss}
  ${({ hasError }) => (hasError ? errorInput : '')}

  > option {
    color: var(--paragraph);
    background-color: var(--dark);
  }
`;
