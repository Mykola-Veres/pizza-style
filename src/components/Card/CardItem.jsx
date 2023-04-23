import {
  CardImgStyle,
  CardImgWrapperStyle,
  CardItemStyle,
  CardPriceStyle,
  CardTextStyle,
  CardTitleStyle,
} from './CardStyle';

function CardItem({ product: { description, image, title, price } }) {
  return (
    <CardItemStyle>
      <CardTitleStyle>{title}</CardTitleStyle>
      <CardImgWrapperStyle>
        <CardImgStyle src={image} alt="pizza" />
      </CardImgWrapperStyle>
      <CardTextStyle>{description}</CardTextStyle>
      <CardPriceStyle>Price: {price} UAH</CardPriceStyle>
    </CardItemStyle>
  );
}

export default CardItem;
