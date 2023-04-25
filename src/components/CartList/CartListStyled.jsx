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
  :hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.2),
      0px 1px 3px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
`;

export const CardImgWrapperStyle = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  margin-top: 10px;
  grid-area: 1 / 1 / 4 / 4;
`;

export const CardImgStyle = styled.img`
  border-radius: 8px;
  width: 95%;
  height: 95%;
  object-fit: cover;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  ${CardItemStyle}:hover & {
    transform: scale(1.07);
  }
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
