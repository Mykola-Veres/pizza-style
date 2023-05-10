import PropTypes from 'prop-types';
import Logo from './Logo';
import { LogoStyled } from './LogoPizzaStyled';

export default function LogoPizza({ to }) {
  return (
    <LogoStyled to={to}>
      <Logo />
    </LogoStyled>
  );
}

LogoPizza.propTypes = {
  to: PropTypes.string.isRequired,
};
