import CartList from 'components/CartList/CartList';
import { useSelector } from 'react-redux';
import CartEmpty from 'components/CartEmpty/CartEmpty';
import ButtonAnOrder from 'components/ButtonAnOrder/ButtonAnOrder';
import { TotalPriceStyled } from './CartStyled';

export default function Cart() {
  const pizzas = useSelector(state => state.cart.pizzasInCart);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  return (
    <>
      {totalPrice && pizzas ? (
        <>
          <CartList pizzas={pizzas} />
          <TotalPriceStyled>Total: {totalPrice} UAH</TotalPriceStyled>
          <ButtonAnOrder />
        </>
      ) : (
        <CartEmpty />
      )}
    </>
  );
}
