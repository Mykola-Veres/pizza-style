import { useState } from 'react';
import productsData from './products';
import CardItem from './CardItem';
import { CardListStyle } from './CardStyle';

export default function CardList({ btnShow }) {
  const [products] = useState(productsData);

  const mapProducts = product => (
    <CardItem key={product.id} product={product} btnShow={btnShow} />
  );

  return <CardListStyle>{products.map(mapProducts)}</CardListStyle>;
}
