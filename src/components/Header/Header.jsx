import {
  HeaderContainerStyle,
  HeaderNavContainerStyle,
  HeaderListStyle,
  HeaderItemStyled,
} from './HeaderStyled';
import NavLinkPizza from 'components/NavLinkPizza/NavLinkPizza';
import LogoPizza from 'components/LogoPizza/LogoPizza';
import CartHeader from 'components/CartHeader/CartHeader';

export default function Header() {
  return (
    <HeaderContainerStyle>
      <HeaderNavContainerStyle>
        <LogoPizza to={'/'} />
        <HeaderListStyle>
          <HeaderItemStyled>
            <NavLinkPizza to={'/'} activeclassname="active">
              <p>Pizza Page</p>
            </NavLinkPizza>
          </HeaderItemStyled>
          <HeaderItemStyled>
            <NavLinkPizza to={'/cart'} activeclassname="active">
              <p>Cart Page</p>
            </NavLinkPizza>
          </HeaderItemStyled>
        </HeaderListStyle>
        <CartHeader />
      </HeaderNavContainerStyle>
    </HeaderContainerStyle>
  );
}
