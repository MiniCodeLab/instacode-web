import styled from '@emotion/styled';
import { tabletUp } from '../breakpoints';

export const CommonLayout = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: var(--padding-s);
  }

  ${tabletUp} {
    text-align: center;

    h1 {
      font-size: 4rem;
      margin-bottom: var(--padding-m);
    }
  }
`;
