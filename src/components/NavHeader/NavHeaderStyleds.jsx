import styled from 'styled-components';

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
