import Header from 'components/Header/Header';
import CardList from 'components/CardPizzaPage/CardList';
import {
  PizzaConteinerStyled,
  PizzaPageConteinerStyled,
} from './PizzaPageStaled';
import { ToTop } from '../../components/ScrollToTop/ScrollToTop';

export default function PizzaPage() {
  return (
    <PizzaConteinerStyled>
      <Header />
      <PizzaPageConteinerStyled>
        <CardList />
      </PizzaPageConteinerStyled>
      <ToTop />
    </PizzaConteinerStyled>
  );
}
