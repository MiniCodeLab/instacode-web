import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type ButtonVariants = 'purple' | 'green' | 'grey';

const greenBackground = css`
  background-color: var(--green);
`;

const purpleBackground = css`
  background-color: var(--purple);
`;

const greyBackground = css`
  background-color: var(--snippet);
`;

const getVariantColor = (variant?: ButtonVariants) => {
  if (variant === 'purple') return purpleBackground;
  if (variant === 'green') return greenBackground;
  if (variant === 'grey') return greyBackground;

  return purpleBackground;
};

export const Button = styled.button<{ variant?: ButtonVariants }>`
  ${(props) => getVariantColor(props.variant)}
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
