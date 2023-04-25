import Cart from 'components/Cart/Cart';
import Header from 'components/Header/Header';
import { CartConteinerStyled, CartPageConteinerStyled } from './CartPageStyled';

export default function CartPage() {
  return (
    <CartConteinerStyled>
      <Header />
      <CartPageConteinerStyled>
        <Cart />
      </CartPageConteinerStyled>
    </CartConteinerStyled>
  );
}
