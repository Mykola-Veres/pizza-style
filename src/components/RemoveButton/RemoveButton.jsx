import {
  ButtonRemoveStyled,
  ButtonRemoveWraperStyled,
} from './RemoveButtonStyled';
import { useDispatch } from 'react-redux';
import { removePizzaFromCart } from 'redux/cart/reducer';
import PropTypes from 'prop-types';

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

RemoveButton.propTypes = {
  pizza: PropTypes.object.isRequired,
};
