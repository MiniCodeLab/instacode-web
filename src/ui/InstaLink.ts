import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

const linkCss = css`
  text-transform: uppercase;
  font-size: 1.25rem;
  color: var(--purple);
  text-decoration: none;

  &.active {
    color: var(--green);
  }
`;

export const InstaLink = styled(Link)`
  ${linkCss}
`;

export const InstaNavLink = styled(NavLink)`
  ${linkCss}
`;
