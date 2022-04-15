import styled from '@emotion/styled';
import { tabletUp } from '../breakpoints';

export const AuthenticateLayout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--padding-m);
  padding-top: var(--padding-m);

  ${tabletUp} {
    padding-top: calc(4 * var(--padding-m));
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
`;

export const ToggleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  max-width: var(--input-width);
`;

export const ErrorWrapper = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;
  width: 100%;
`;
