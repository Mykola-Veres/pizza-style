import { ToTop } from '../../components/ScrollToTop/ScrollToTop';
import Cart from 'components/Cart/Cart';
import Header from 'components/Header/Header';
import { CartConteinerStyled, CartPageConteinerStyled } from './CartPageStyled';

export default function CartPage() {
  return (
    <CartConteinerStyled>
      <Header />
      <section>
        <CartPageConteinerStyled>
          <Cart />
        </CartPageConteinerStyled>
        <ToTop />
      </section>
    </CartConteinerStyled>
  );
}
