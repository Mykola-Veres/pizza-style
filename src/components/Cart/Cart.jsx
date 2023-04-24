import CartList from 'components/CartList/CartList';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TotalPriceStyled } from './CartStyled';
import CartEmpty from 'components/CartEmpty/CartEmpty';
import ButtonAnOrder from 'components/ButtonAnOrder/ButtonAnOrder';

export default function Cart() {
  const [pizzas] = useState(useSelector(state => state.cart.pizzasInCart));
  const totalPrice = useSelector(state => state.cart.totalPrice);

  return (
    <>
      {totalPrice && pizzas ? (
        <>
          <CartList pizzas={pizzas} btnShow={true} />
          <TotalPriceStyled>Total: {totalPrice} UAH</TotalPriceStyled>
          <ButtonAnOrder />
        </>
      ) : (
        <CartEmpty />
      )}
    </>
  );
}
