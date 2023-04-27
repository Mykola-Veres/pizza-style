import Button from 'components/ButtonAdd/Button';
import {
  CardImgStyle,
  CardImgWrapperStyle,
  CardItemStyle,
  CardPriceStyle,
  CardTextStyle,
  CardTitleStyle,
  PizzaCountStyled,
} from './CartListStyled';
import { useSelector } from 'react-redux';
import RemoveButton from 'components/RemoveButton/RemoveButton';
import PropTypes from 'prop-types';

export default function CartItem({ pizza }) {
  const pizzas = useSelector(state => state.cart.pizzasInCart);
  const pizzaItem = pizzas.find(item => item.id === pizza.id);
  return (
    <>
      {pizzas.length > 0 && pizzaItem.count > 0 && (
        <CardItemStyle>
          <CardTitleStyle>{pizza.title}</CardTitleStyle>
          <CardImgWrapperStyle>
            <CardImgStyle src={pizza.image} alt="pizza" />
          </CardImgWrapperStyle>
          <CardTextStyle>{pizza.description}</CardTextStyle>
          <CardPriceStyle>Price: {pizza.price} UAH</CardPriceStyle>
          <Button product={pizza} btnShow={true}>
            Add to cart
          </Button>
          <PizzaCountStyled>{pizzaItem.count}</PizzaCountStyled>
          <RemoveButton pizza={pizza} />
        </CardItemStyle>
      )}
    </>
  );
}

CartItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};
