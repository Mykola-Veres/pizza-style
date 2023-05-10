import styled from 'styled-components';

export const PizzaPageConteinerStyled = styled.main`
  padding-bottom: 100px;
  padding-top: 40px;
`;

export const PizzaConteinerStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const PizzaPageMainTitleStyled = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`;
