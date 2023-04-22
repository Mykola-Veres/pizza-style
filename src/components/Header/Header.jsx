import Logo from './Logo';
import {
  HeaderContainerStyle,
  HeaderNavContainerStyle,
  HeaderListStyle,
  LogoStyle,
  LinkToPizzaPageStyled,
} from './HeaderStyled';
import { Icon } from '@iconify/react';

export default function Header() {
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
              <Icon icon="bi:cart3" width={15} />
            </LinkToPizzaPageStyled>
          </li>
        </HeaderListStyle>
      </HeaderNavContainerStyle>
    </HeaderContainerStyle>
  );
}
