import Button from 'components/Button/CustomButton';
import { ButtonAnOrderWraperStyled } from './ButtonAnOrderStyled';
import { useDispatch } from 'react-redux';
import { clearPizzasInCart } from 'redux/cart/reducer';

export default function ButtonAnOrder() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearPizzasInCart());
  };

  return (
    <ButtonAnOrderWraperStyled>
      <Button onClick={handleClick} type="submit">
        Make an order
      </Button>
    </ButtonAnOrderWraperStyled>
  );
}
