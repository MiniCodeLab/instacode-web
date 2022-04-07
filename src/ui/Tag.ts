import styled from '@emotion/styled';

export const Tag = styled.button`
  background-color: var(--purple);
  border-radius: var(--border-radius);
  color: var(--dark);
  font-weight: bold;
  padding: var(--padding-xs);
  text-align: center;
  text-transform: capitalize;
`;

export const TagGroup = styled.div`
  display: flex;
  align-items: center;
  gap: var(--padding-s);
`;
