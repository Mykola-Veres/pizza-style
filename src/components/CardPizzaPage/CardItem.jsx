import PropTypes from 'prop-types';
import Button from 'components/ButtonAdd/Button';
import {
  CardImgStyle,
  CardImgWrapperStyle,
  CardItemStyle,
  CardPriceStyle,
  CardTextStyle,
  CardTitleStyle,
} from './CardStyle';

function CardItem({ product }) {
  return (
    <CardItemStyle>
      <CardTitleStyle>{product.title}</CardTitleStyle>
      <CardImgWrapperStyle>
        <CardImgStyle src={product.image} alt={product.title} loading="lazy" />
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
