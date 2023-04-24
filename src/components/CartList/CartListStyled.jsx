import styled from 'styled-components';

export const CartListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const CardItemStyle = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  /* :hover {
    transform: scale(1.02);
  } */
`;

export const CardImgWrapperStyle = styled.div`
  width: 150px;
  height: 150px;
  box-shadow: inset 0 0 5px 5px white;
  margin-bottom: 10px;
  margin-top: 10px;
  grid-area: 1 / 1 / 4 / 4;
`;

export const CardImgStyle = styled.img`
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardTitleStyle = styled.h3`
  margin-right: 10px;
  width: 170px;
`;
export const CardTextStyle = styled.p`
  width: 200px;
  font-style: italic;
`;

export const CardPriceStyle = styled.p`
  width: 180px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.3px;
  color: #130a90;
  font-style: italic;
`;

export const PizzaCountStyled = styled.div`
  width: 80px;
  font-style: italic;
  font-size: 22px;
  line-height: 24px;
  font-weight: 600;
  color: #0f3b0c;
`;
