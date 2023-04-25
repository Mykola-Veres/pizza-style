import { theme } from 'common/Theme';
import styled from 'styled-components';

export const HeaderContainerStyle = styled.header`
  margin: 0 auto;
  background-color: ${theme.colors.mainBlack};
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  user-select: none;
`;

export const HeaderNavContainerStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-width: 320px;
  padding: 20px 10px;
`;

export const HeaderListStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`;

export const HeaderItemStyled = styled.li`
  :hover {
    text-shadow: 0px 0px 5px wheat;
  }
`;
