import { theme } from 'common/Theme';
import styled from 'styled-components';

export const ButtonRemoveWraperStyled = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    margin-right: 8px;
  }
`;
export const ButtonRemoveStyled = styled.button`
  border-radius: 12px;
  padding: 10px 25px;
  transition: background-color 0.3s;
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  cursor: pointer;
  :hover {
    background-color: ${theme.colors.mainBlack};
    border-color: #b70d0d;
  }
  @media (min-width: 768px) {
    padding: 8px 15px;
  }
  @media (min-width: 1280px) {
    padding: 12px 30px;
  }
`;
