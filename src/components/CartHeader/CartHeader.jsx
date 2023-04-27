import { Icon } from '@iconify/react';
import TotalCount from '../TotalCount/TotalCount';
import NavLinkPizza from 'components/NavLinkPizza/NavLinkPizza';
import { useSelector } from 'react-redux';

export default function CartHeader() {
  const pizzas = useSelector(state => state.cart.pizzasInCart);
  return (
    <NavLinkPizza to={'/cart'}>
      <Icon icon="bi:cart3" width={20} />
      <TotalCount pizzas={pizzas} />
    </NavLinkPizza>
  );
}
