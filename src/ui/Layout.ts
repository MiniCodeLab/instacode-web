import styled from '@emotion/styled';

export const Layout = styled.main`
  padding: var(--padding-m);

  h1,
  h2,
  h3,
  h4 {
    color: var(--title);
    font-weight: bold;
    line-height: 100%;
  }

  p,
  span {
    color: var(--paragraph);
    line-height: 100%;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }

  p,
  span,
  h4,
  button,
  input {
    font-size: 1rem;
  }
`;
