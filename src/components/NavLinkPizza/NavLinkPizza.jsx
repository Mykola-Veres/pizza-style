import { LinkToPizzaPageStyled } from './NavLinkPizzaStyled';

export default function NavLinkPizza({ children, to, ...props }) {
  return (
    <>
      <LinkToPizzaPageStyled to={to} {...props}>
        {children}
      </LinkToPizzaPageStyled>
    </>
  );
}
