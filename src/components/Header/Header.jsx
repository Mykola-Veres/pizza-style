import Logo from './Logo';
import { useSelector } from 'react-redux';
import {
  HeaderContainerStyle,
  HeaderNavContainerStyle,
  HeaderListStyle,
  LogoStyle,
  LinkToPizzaPageStyled,
} from './HeaderStyled';
import { Icon } from '@iconify/react';
import TotalCount from '../TotalCount/TotalCount';

export default function Header() {
  const pizzas = useSelector(state => state.cart.pizzasInCart);

  return (
    <HeaderContainerStyle>
      <HeaderNavContainerStyle>
        <HeaderListStyle>
          <li>
            <LogoStyle to={'/'}>
              <Logo />
            </LogoStyle>
          </li>

          <li>
            <LinkToPizzaPageStyled to={'/'}>
              <p>Pizza Page</p>
            </LinkToPizzaPageStyled>
          </li>
          <li>
            <LinkToPizzaPageStyled to={'/cart'}>
              <p>Cart Page</p>
            </LinkToPizzaPageStyled>
          </li>
          <li>
            <LinkToPizzaPageStyled to={'/cart'}>
              <TotalCount pizzas={pizzas}></TotalCount>
              <Icon icon="bi:cart3" width={15} />
            </LinkToPizzaPageStyled>
          </li>
        </HeaderListStyle>
      </HeaderNavContainerStyle>
    </HeaderContainerStyle>
  );
}
