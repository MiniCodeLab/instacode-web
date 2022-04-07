import styled from '@emotion/styled';

export const Snippet = styled.div`
  background-color: var(--snippet);
  border-radius: var(--border-radius);
  color: var(--white);
  display: flex;
  flex-direction: column;
  gap: var(--padding-s);
  max-width: var(--snippet-width);
  padding: var(--padding-s);
  width: 100%;
`;

export const Code = styled.div`
  background-color: var(--dark);
  border-radius: var(--border-radius);
  border: 4px solid var(--green);

  > pre {
    background-color: transparent !important;
  }
`;

export const SnippetsGroup = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--padding-m);
  max-width: calc(2 * calc(var(--snippet-width) + var(--padding-m)));
`;
