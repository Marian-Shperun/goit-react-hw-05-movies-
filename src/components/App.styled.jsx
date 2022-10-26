import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-bottom: 20px;
  padding: 20px 0;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Link = styled(NavLink)`
  padding: 10px 15px;
  color: black;
  font-weight: 500;
  &.active {
    color: orangered;
  }
`;
