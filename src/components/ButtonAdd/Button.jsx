import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deletePizzaFromCart, setPizzaInCart } from 'redux/cart/reducer';
import { Plus } from 'assets/Plus';
import { Minus } from 'assets/Minus';
import {
  ButtonContainerStyled,
  ButtonMinusStyled,
  ButtonPlusMinusStyled,
  ButtonStyled,
  ButtonSvgStyled,
} from './ButtonStyle';

export default function Button(props) {
  const [btnShow, setBtnShow] = useState(props.btnShow);
  const dispatch = useDispatch();
  const pizzas = useSelector(state => state.cart.pizzasInCart);
  const isPizzaInCarts = pizzas.find(pizza => pizza.id === props.product.id);

  const handleClick = () => {
    setBtnShow(true);
    dispatch(setPizzaInCart(props.product));
  };

  const handleClickPlus = () => {
    dispatch(setPizzaInCart(props.product));
  };

  const handleClickMinus = () => {
    dispatch(deletePizzaFromCart(props.product));
    if (isPizzaInCarts.count === 1) {
      setBtnShow(false);
    }
  };

  return (
    <>
      {btnShow ? (
        <ButtonContainerStyled>
          <ButtonPlusMinusStyled onClick={handleClickPlus}>
            <ButtonSvgStyled>
              <Plus />
            </ButtonSvgStyled>
          </ButtonPlusMinusStyled>
          <ButtonMinusStyled onClick={handleClickMinus}>
            <ButtonSvgStyled>
              <Minus />
            </ButtonSvgStyled>
          </ButtonMinusStyled>
        </ButtonContainerStyled>
      ) : (
        <ButtonStyled onClick={handleClick}>{props.children}</ButtonStyled>
      )}
    </>
  );
}

Button.propTypes = {
  product: PropTypes.object.isRequired,
};
