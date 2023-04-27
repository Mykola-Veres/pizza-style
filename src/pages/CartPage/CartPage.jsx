import Cart from 'components/Cart/Cart';
import Header from 'components/Header/Header';
import { CartConteinerStyled, CartPageConteinerStyled } from './CartPageStyled';
import { ToTop } from '../../components/ScrollToTop/ScrollToTop';

export default function CartPage() {
  return (
    <CartConteinerStyled>
      <Header />
      <CartPageConteinerStyled>
        <Cart />
      </CartPageConteinerStyled>
      <ToTop />
    </CartConteinerStyled>
  );
}
