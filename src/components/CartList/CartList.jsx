import CartItem from './CartItem';
import { CartListStyle } from './CartListStyled';
import PropTypes from 'prop-types';

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

CartList.propTypes = {
  pizzas: PropTypes.array.isRequired,
};
