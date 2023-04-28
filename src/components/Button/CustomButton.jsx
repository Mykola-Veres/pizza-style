import { ButtonStyled } from './CustomButtonStyled';

const Button = ({ onClick, children, disabled, ...props }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled} {...props}>
      {children}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  onClick: () => {},
  children: '',
  disabled: false,
};

export default Button;
