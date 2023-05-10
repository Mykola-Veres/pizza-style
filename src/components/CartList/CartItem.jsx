import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/ButtonAdd/Button';
import RemoveButton from 'components/RemoveButton/RemoveButton';
import {
  CardImgStyle,
  CardImgWrapperStyle,
  CardItemStyle,
  CardPriceStyle,
  CardTextStyle,
  CardTitleStyle,
  PizzaCountStyled,
} from './CartListStyled';

export default function CartItem({ pizza }) {
  const pizzas = useSelector(state => state.cart.pizzasInCart);
  const pizzaItem = pizzas.find(item => item.id === pizza.id);
  return (
    <>
      {pizzas.length > 0 && pizzaItem.count > 0 && (
        <CardItemStyle>
          <CardTitleStyle>{pizza.title}</CardTitleStyle>
          <CardImgWrapperStyle>
            <CardImgStyle src={pizza.image} alt={pizza.title} loading="lazy" />
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
