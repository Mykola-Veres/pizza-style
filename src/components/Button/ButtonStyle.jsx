import styled from 'styled-components';
import { theme } from '../../common/Theme';

export const ButtonStyled = styled.button`
  background-color: ${props => (props.color ? props.color : '#fff')};
  color: ${props => (props.color ? '#fff' : props.color)};
  border: 2px solid ${props => (props.color ? props.color : '#000')};
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${props =>
      props.color ? theme.colors.white : theme.colors.secondary};
    color: ${props => (props.color ? props.color : '#431da2')};
  }
  font-weight: 600;
  font-style: italic;
`;

export const ButtonPlusMinusStyled = styled.button`
  border-radius: 50%;
  padding: 10px 14px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #fdfdfd;
  background-color: ${theme.colors.primary};
  border-color: transparent;
  cursor: pointer;
  margin-right: 5px;
  :hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const ButtonMinusStyled = styled.button`
  border-radius: 50%;
  padding: 10px 16px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #fdfdfd;
  cursor: pointer;
  border-color: transparent;
  background-color: ${theme.colors.primary};
  :hover {
    background-color: ${theme.colors.secondary};
  }
`;
