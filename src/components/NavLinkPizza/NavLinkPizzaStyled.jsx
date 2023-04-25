import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'common/Theme';

export const LinkToPizzaPageStyled = styled(NavLink)`
  display: flex;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  &.${props => props.activeclassname} {
    text-decoration: underline;
    text-underline-offset: 6px;
  }
`;
