import { theme } from 'common/Theme';
import styled from 'styled-components';

export const ButtonAnOrderWraperStyled = styled.div`
  text-align: center;
`;

export const ButtonAnOrderStyled = styled.button`
  border-radius: 12px;
  padding: 12px 30px;
  transition: background-color 0.3s;
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  cursor: pointer;
  :hover {
    background-color: ${theme.colors.secondary};
    border-color: #b70d0d;
  }
`;
