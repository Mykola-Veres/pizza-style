import NavLinkPizza from 'components/NavLinkPizza/NavLinkPizza';
import { HeaderListStyle, HeaderItemStyled } from './NavHeaderStyled';

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
