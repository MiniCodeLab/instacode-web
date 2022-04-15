import styled from '@emotion/styled';
import { tabletUp } from './breakpoints';

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
  gap: var(--padding-m);
  justify-content: center;
  margin: 0 auto;
  max-width: calc(2 * calc(var(--snippet-width) + var(--padding-m)));
`;

export const EditableBlockWrapper = styled.div`
  width: 100%;
  position: relative;

  > div:first-of-type {
    max-width: unset;
  }

  > a {
    font-size: 1rem;
    position: absolute;
    right: var(--padding-xs);
    top: calc(1.5 * var(--padding-xs));

    ${tabletUp} {
      right: var(--padding-s);
      top: var(--padding-s);
    }
  }
`;

export const SnippetFilterWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: var(--padding-s);
  margin-bottom: var(--padding-s);

  ${tabletUp} {
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: var(--padding-m);
  }
`;
