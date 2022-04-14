import styled from '@emotion/styled';
import { tabletUp } from './breakpoints';

export const NavbarWrapper = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--padding-s);
  width: 100%;

  ${tabletUp} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-m) var(--padding-s);
  }
`;

export const LinksWrapper = styled.nav`
  align-items: center;
  align-self: flex-end;
  display: flex;
  gap: var(--padding-s);

  ${tabletUp} {
    align-self: unset;
  }
`;
