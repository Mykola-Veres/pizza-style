import Button from 'components/Button/Button';
import {
  CardImgStyle,
  CardImgWrapperStyle,
  CardItemStyle,
  CardPriceStyle,
  CardTextStyle,
  CardTitleStyle,
} from './CardStyle';

function CardItem({ product, btnShow }) {
  return (
    <CardItemStyle>
      <CardTitleStyle>{product.title}</CardTitleStyle>
      <CardImgWrapperStyle>
        <CardImgStyle src={product.image} alt="pizza" />
      </CardImgWrapperStyle>
      <CardTextStyle>{product.description}</CardTextStyle>
      <CardPriceStyle>Price: {product.price} UAH</CardPriceStyle>
      <Button color={'red'} product={product} btnShow={btnShow}>
        Add to cart
      </Button>
    </CardItemStyle>
  );
}

export default CardItem;
