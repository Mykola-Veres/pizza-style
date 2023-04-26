import { useState } from 'react';
import {
  ButtonConteinerStyled,
  ButtonMinusStyled,
  ButtonPlusMinusStyled,
  ButtonStyled,
} from './ButtonStyle';
import { useDispatch, useSelector } from 'react-redux';
import { deletePizzaFromCart, setPizzaInCart } from 'redux/cart/reducer';

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
        <ButtonConteinerStyled>
          <ButtonPlusMinusStyled onClick={handleClickPlus}>
            +
          </ButtonPlusMinusStyled>
          <ButtonMinusStyled onClick={handleClickMinus}>-</ButtonMinusStyled>
        </ButtonConteinerStyled>
      ) : (
        <ButtonStyled onClick={handleClick}>{props.children}</ButtonStyled>
      )}
    </>
  );
}
