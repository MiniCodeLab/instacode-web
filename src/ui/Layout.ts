import styled from '@emotion/styled';
import { tabletUp } from './breakpoints';

export const Layout = styled.main`
  padding: var(--padding-s);
  padding-top: 0;

  ${tabletUp} {
    padding: var(--padding-m);
    padding-top: 0;
  }
`;
