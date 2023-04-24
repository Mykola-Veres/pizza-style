import CartItem from './CartItem';
import { CartListStyle } from './CartListStyled';

export default function CartList({ pizzas }) {
  return (
    <>
      <CartListStyle>
        {pizzas.map(pizza => (
          <CartItem
            key={pizza.id}
            pizza={pizza}
            btnShow={true}
            pizzaCount={pizza.count}
          />
        ))}
      </CartListStyle>
    </>
  );
}
