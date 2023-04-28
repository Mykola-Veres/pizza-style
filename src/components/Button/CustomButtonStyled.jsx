import { theme } from 'common/Theme';
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: ${props => props.bgColor || theme.colors.primary};
  color: ${props => props.textColor || theme.colors.white};
  font-size: ${props => props.fontSize || theme.sizes.medium};
  padding: ${props => props.padding || '12px 30px'};
  border-radius: ${props => props.borderRadius || '12px'};
  transition: background-color 0.3s;
  cursor: pointer;
  :hover {
    background-color: ${props => props.bgColorHover || theme.colors.secondary};
    border-color: ${props => props.borderColorHover || theme.colors.mainBlack};
  }
`;
