import {
  ButtonRemoveStyled,
  ButtonRemoveWraperStyled,
} from './RemoveButtonStyled';
import { useDispatch } from 'react-redux';
import { removePizzaFromCart } from 'redux/cart/reducer';

export default function RemoveButton({ pizza }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removePizzaFromCart(pizza));
  };

  return (
    <ButtonRemoveWraperStyled>
      <ButtonRemoveStyled onClick={handleClick}>Remove</ButtonRemoveStyled>
    </ButtonRemoveWraperStyled>
  );
}
