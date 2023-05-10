import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removePizzaFromCart } from 'redux/cart/reducer';
import Button from 'components/Button/CustomButton';
import { theme } from 'common/Theme';
import { ButtonRemoveWraperStyled } from './RemoveButtonStyled';

export default function RemoveButton({ pizza }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removePizzaFromCart(pizza));
  };

  return (
    <ButtonRemoveWraperStyled>
      <Button
        onClick={handleClick}
        fontSize={theme.sizes.small}
        bgColorHover={theme.colors.mainBlack}
        borderColorHover="#b70d0d"
        padding="12px 16px"
      >
        Remove
      </Button>
    </ButtonRemoveWraperStyled>
  );
}

RemoveButton.propTypes = {
  pizza: PropTypes.object.isRequired,
};
