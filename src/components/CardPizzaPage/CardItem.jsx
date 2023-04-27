import Button from 'components/Button/Button';
import {
  CardImgStyle,
  CardImgWrapperStyle,
  CardItemStyle,
  CardPriceStyle,
  CardTextStyle,
  CardTitleStyle,
} from './CardStyle';
import PropTypes from 'prop-types';

function CardItem({ product }) {
  return (
    <CardItemStyle>
      <CardTitleStyle>{product.title}</CardTitleStyle>
      <CardImgWrapperStyle>
        <CardImgStyle src={product.image} alt="pizza" />
      </CardImgWrapperStyle>
      <CardTextStyle>{product.description}</CardTextStyle>
      <CardPriceStyle>Price: {product.price} UAH</CardPriceStyle>
      <Button product={product} btnShow={false}>
        Add to cart
      </Button>
    </CardItemStyle>
  );
}

export default CardItem;

CardItem.propTypes = {
  product: PropTypes.object.isRequired,
};
