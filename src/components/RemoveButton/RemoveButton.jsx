import {
  ButtonAnOrderStyled,
  ButtonAnOrderWraperStyled,
} from './RemoveButtonStyled';
import { useDispatch } from 'react-redux';
import { removePizzaFromCart } from 'redux/cart/reducer';

export default function RemoveButton({ pizza }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removePizzaFromCart(pizza));
  };

  return (
    <ButtonAnOrderWraperStyled>
      <ButtonAnOrderStyled onClick={handleClick}>Remove</ButtonAnOrderStyled>
    </ButtonAnOrderWraperStyled>
  );
}
