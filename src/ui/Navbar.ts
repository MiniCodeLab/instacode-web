import styled from '@emotion/styled';
import { tabletUp } from './breakpoints';

export const NavbarWrapper = styled.header`
  align-items: flex-start;
  display: flex;
  gap: var(--padding-s);
  justify-content: space-between;
  width: 100%;
  margin: var(--padding-s) auto;
  border-bottom: 1px solid var(--snippet);
  padding-bottom: var(--padding-xs);

  ${tabletUp} {
    margin-bottom: var(--padding-m);
  }
`;

export const LinksWrapper = styled.nav`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: var(--padding-s);
  padding-top: var(--padding-xs);

  > .logout {
    display: none;
  }

  ${tabletUp} {
    align-items: center;
    flex-direction: row;

    > .logout {
      display: block;
    }
  }
`;
