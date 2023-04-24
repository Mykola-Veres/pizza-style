import { useState } from 'react';
import {
  ButtonMinusStyled,
  ButtonPlusMinusStyled,
  ButtonStyled,
} from './ButtonStyle';
import { useDispatch, useSelector } from 'react-redux';
import { deletePizzaFromCart, setPizzaInCart } from 'redux/cart/reducer';

export default function Button(props) {
  const [color, setColor] = useState(false);
  const [btnShow, setBtnShow] = useState(props.btnShow);
  const dispatch = useDispatch();
  const pizzas = useSelector(state => state.cart.pizzasInCart);
  const isPizzaInCarts = pizzas.find(pizza => pizza.id === props.product.id);

  const handleClick = () => {
    setColor(!color);
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
        <>
          <ButtonPlusMinusStyled onClick={handleClickPlus}>
            +
          </ButtonPlusMinusStyled>
          <ButtonMinusStyled onClick={handleClickMinus}>-</ButtonMinusStyled>
        </>
      ) : (
        <ButtonStyled color={color ? props.color : null} onClick={handleClick}>
          {props.children}
        </ButtonStyled>
      )}
    </>
  );
}
