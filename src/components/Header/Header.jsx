import LogoPizza from 'components/LogoPizza/LogoPizza';
import CartHeader from 'components/CartHeader/CartHeader';
import NavHeader from 'components/NavHeader/NavHeader';
import { HeaderContainerStyle, HeaderNavContainerStyle } from './HeaderStyled';

export default function Header() {
  return (
    <HeaderContainerStyle>
      <HeaderNavContainerStyle>
        <LogoPizza to={'/'} />
        <NavHeader />
        <CartHeader />
      </HeaderNavContainerStyle>
    </HeaderContainerStyle>
  );
}
