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

  > div:first-of-type {
    max-width: unset;
  }
`;

export const Code = styled.div`
  background-color: var(--dark);
  border-radius: var(--border-radius);
  border: 4px solid var(--green);
  max-width: var(--input-width);
  max-height: calc(var(--input-width) / 1.5);
  overflow-y: scroll;
  width: 100%;

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

export const EditableBlockWrapper = styled.div`
  width: 100%;
  position: relative;

  > div:first-of-type {
    max-width: unset;
  }

  > a {
    position: absolute;
    top: var(--padding-s);
    right: var(--padding-s);
    font-size: 1rem;
  }
`;
