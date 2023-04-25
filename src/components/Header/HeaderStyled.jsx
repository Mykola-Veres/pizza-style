import { theme } from 'common/Theme';
import styled from 'styled-components';

export const HeaderContainerStyle = styled.header`
  margin-left: auto;
  margin-right: auto;
  background-color: ${theme.colors.mainBlack};
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
`;

export const HeaderNavContainerStyle = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-width: 320px;
  padding: 20px 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media (min-width: 1280px) {
  }
`;

export const HeaderListStyle = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 140px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 250px;
  }
`;

export const HeaderItemStyled = styled.li`
  :hover {
    text-shadow: 0px 0px 5px wheat;
  }
  :not(:last-child) {
    margin-bottom: 7px;
  }

  @media (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 0px;
    }
  }
`;
