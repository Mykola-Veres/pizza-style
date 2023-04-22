import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainerStyle = styled.header`
  margin: 0 auto;
  background-color: #221f1f;
  color: whitesmoke;
  border: 1px solid #fff;
  user-select: none;
  :hover {
    text-shadow: 0px 0px 5px wheat;
    border-bottom: 1px solid wheat;
  }
`;

export const HeaderNavContainerStyle = styled.nav`
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  min-width: 320px;
  padding: 20px 10px;
`;

export const HeaderListStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoStyle = styled(Link)`
  font-style: italic;
`;

export const LinkToPizzaPageStyled = styled(Link)`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #bc7216;
`;
