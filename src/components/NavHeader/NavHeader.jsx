import { HeaderListStyle, HeaderItemStyled } from './NavHeaderStyleds';
import NavLinkPizza from 'components/NavLinkPizza/NavLinkPizza';

export default function NavHeader() {
  return (
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
  );
}