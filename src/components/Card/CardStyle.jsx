import styled from 'styled-components';

export const CardListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  /* grid-template-columns: repeat(3, 30%);
  grid-template-rows: repeat(3, 300px); */
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  align-content: center;
`;

export const CardItemStyle = styled.li`
  text-align: center;
`;

export const CardImgWrapperStyle = styled.div`
  width: 150px;
  height: 150px;
  box-shadow: inset 0 0 5px 5px white;
  margin-bottom: 15px;
  grid-area: 1 / 1 / 4 / 4;
  margin-left: auto;
  margin-right: auto;
`;

export const CardImgStyle = styled.img`
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardTitleStyle = styled.h3`
  margin-left: auto;
  margin-right: auto;
  width: 220px;
  margin-bottom: 10px;
`;

export const CardTextStyle = styled.p`
  margin-left: auto;
  margin-right: auto;
  width: 220px;
  margin-bottom: 10px;
  font-style: italic;
`;

export const CardPriceStyle = styled.p`
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.3px;
  color: #130a90;
  margin-bottom: 10px;
`;
