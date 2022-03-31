import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type ButtonVariants = 'purple' | 'green';

const greenBackground = css`
  background-color: var(--green);
`;

const purpleBackground = css`
  background-color: var(--purple);
`;

export const Button = styled.button<{ variant?: ButtonVariants }>`
  ${(props) => (props.variant === 'purple' ? purpleBackground : greenBackground)}
  border-radius: var(--border-radius);
  border: 2px solid var(--border);
  color: var(--dark);
  font-size: 1.25rem;
  font-weight: bold;
  padding: var(--padding-xs);
  text-transform: uppercase;

  &:disabled {
    background-color: var(--snippet);
    cursor: not-allowed;
  }
`;
