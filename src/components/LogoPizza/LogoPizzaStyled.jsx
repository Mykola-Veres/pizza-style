import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoStyled = styled(NavLink)`
  font-style: italic;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover {
    text-shadow: 0px 0px 5px wheat;
  }
`;
