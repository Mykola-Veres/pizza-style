import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: ${props => (props.color ? props.color : '#fff')};
  color: ${props => (props.color ? '#fff' : props.color)};
  border: 2px solid ${props => (props.color ? props.color : '#000')};
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${props => (props.color ? '#fff' : '#8eea95')};
    color: ${props => (props.color ? props.color : '#431da2')};
  }
  font-weight: 600;
  font-style: italic;
`;

export const ButtonPlusMinusStyled = styled.button`
  :hover {
    background-color: #139652;
  }
`;

export const ButtonMinusStyled = styled.button`
  :hover {
    background-color: #139652;
  }
`;
