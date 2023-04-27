import {
  ButtonAnOrderStyled,
  ButtonAnOrderWraperStyled,
} from './ButtonAnOrderStyled';
import { useDispatch } from 'react-redux';
import { clearPizzasInCart } from 'redux/cart/reducer';

export default function ButtonAnOrder() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearPizzasInCart());
  };

  return (
    <ButtonAnOrderWraperStyled>
      <ButtonAnOrderStyled onClick={handleClick} type="submit">
        Make an order
      </ButtonAnOrderStyled>
    </ButtonAnOrderWraperStyled>
  );
}
