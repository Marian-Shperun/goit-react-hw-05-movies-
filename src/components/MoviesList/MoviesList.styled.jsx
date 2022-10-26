import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const UlMovies = styled.ul`
  list-style-type: decimal;
  gap: 10px;
  font-size: 20px;
`;

export const LiMovies = styled.li`
  display: list-item;
  margin-top: 5px;
`;

export const NavLinkStyle = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: orangered;
  }
`;
