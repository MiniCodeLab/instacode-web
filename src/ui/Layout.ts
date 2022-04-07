import styled from '@emotion/styled';
import { tabletUp } from './breakpoints';

export const Layout = styled.main`
  padding: var(--padding-s);

  ${tabletUp} {
    padding: var(--padding-m);
  }
`;
