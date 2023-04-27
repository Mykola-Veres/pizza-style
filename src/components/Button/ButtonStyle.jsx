import styled from 'styled-components';
import { theme } from '../../common/Theme';

export const ButtonStyled = styled.button`
  background-color: ${theme.colors.white};
  color: ${theme.colors.mainBlack};
  border: 2px solid ${theme.colors.mainBlack};
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  }
  font-weight: 600;
  font-style: italic;
  margin-bottom: 8px;
`;

export const ButtonPlusMinusStyled = styled.button`
  border-radius: 50%;
  padding: 10px 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border-color: transparent;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 8px;
  :hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const ButtonMinusStyled = styled.button`
  border-radius: 50%;
  padding: 10px 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #fdfdfd;
  cursor: pointer;
  border-color: transparent;
  background-color: ${theme.colors.primary};
  margin-bottom: 8px;
  :hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const ButtonConteinerStyled = styled.div`
  display: block;
`;

export const ButtonSvgStyled = styled.svg`
  fill: ${theme.colors.white};
  width: 18px;
  height: 18px;
`;
