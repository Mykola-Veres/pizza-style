import styled from 'styled-components';

export const CardListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 0.7fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  align-content: center;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const CardItemStyle = styled.li`
  padding-top: 5px;
  text-align: center;
  :hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.2),
      0px 1px 3px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const CardImgWrapperStyle = styled.div`
  width: 170px;
  height: 170px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const CardImgStyle = styled.img`
  border-radius: 8px;
  width: 95%;
  height: 95%;
  object-fit: cover;
  margin: auto;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  ${CardItemStyle}:hover & {
    transform: scale(1.07);
  }
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
  height: 72px;
  margin-bottom: 10px;
  font-style: italic;
  overflow: auto;
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
