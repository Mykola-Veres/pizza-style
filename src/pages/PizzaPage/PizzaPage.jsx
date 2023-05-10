import { ToTop } from '../../components/ScrollToTop/ScrollToTop';
import Header from 'components/Header/Header';
import CardList from 'components/CardPizzaPage/CardList';
import {
  PizzaConteinerStyled,
  PizzaPageConteinerStyled,
  PizzaPageMainTitleStyled,
} from './PizzaPageStaled';

export default function PizzaPage() {
  return (
    <PizzaConteinerStyled>
      <Header />
      <PizzaPageConteinerStyled>
        <section>
          <PizzaPageMainTitleStyled>Pizza Page</PizzaPageMainTitleStyled>
          <CardList />
        </section>
      </PizzaPageConteinerStyled>
      <ToTop />
    </PizzaConteinerStyled>
  );
}
