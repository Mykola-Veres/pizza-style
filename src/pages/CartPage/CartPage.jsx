import Cart from 'components/Cart/Cart';
import Header from 'components/Header/Header';
import { CartPageConteinerStyled } from './CartPageStyled';

export default function CartPage() {
  return (
    <>
      <Header />
      <CartPageConteinerStyled>
        <Cart />
      </CartPageConteinerStyled>
    </>
  );
}
