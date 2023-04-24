import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartEmptyTextStyled = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  padding-top: 200px;
  padding-bottom: 300px;
`;

export const LinkToPizzaStyled = styled(Link)`
  margin-left: 8px;
  color: #bc7216;
  cursor: pointer;
`;
