import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from 'common/Theme';

export const CartEmptyTextStyled = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: ${theme.sizes.medium};
  line-height: 24px;
  padding-top: 200px;
  padding-bottom: 300px;
  @media (min-width: 768px) {
    font-size: ${theme.sizes.large};
    line-height: 28px;
  }
`;

export const LinkToPizzaStyled = styled(Link)`
  margin-left: 8px;
  color: ${theme.colors.primary};
  cursor: pointer;
`;
