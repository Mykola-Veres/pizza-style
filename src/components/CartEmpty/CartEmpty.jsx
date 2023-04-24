import { CartEmptyTextStyled, LinkToPizzaStyled } from './CartEmptyStyled';

export default function CartEmpty() {
  return (
    <CartEmptyTextStyled>
      Please, choose pizza <LinkToPizzaStyled to={'/'}>here</LinkToPizzaStyled>
    </CartEmptyTextStyled>
  );
}
