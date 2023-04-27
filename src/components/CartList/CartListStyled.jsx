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
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  :hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.2),
      0px 1px 3px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 0px;
    padding-top: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardImgWrapperStyle = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-left: 5px;
    width: 150px;
    height: 150px;
  }
  @media (min-width: 1280px) {
    width: 170px;
    height: 170px;
  }
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
  width: 200px;
  @media (min-width: 768px) {
    width: 120px;
    margin-right: 0px;
  }
  @media (min-width: 1280px) {
    width: 240px;
  }
`;
export const CardTextStyle = styled.p`
  width: 240px;
  font-style: italic;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    width: 150px;
    margin-bottom: 0;
  }
  @media (min-width: 1280px) {
    width: 240px;
  }
`;

export const CardPriceStyle = styled.p`
  width: 220px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.3px;
  color: #130a90;
  font-style: italic;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    width: 100px;
    margin-bottom: 0;
  }
  @media (min-width: 1280px) {
    width: 190px;
  }
`;

export const PizzaCountStyled = styled.div`
  font-style: italic;
  font-size: 22px;
  line-height: 24px;
  font-weight: 600;
  color: #0f3b0c;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    width: 50px;
    margin-bottom: 0;
  }
  @media (min-width: 1280px) {
    width: 80px;
  }
`;
