import Header from 'components/Header/Header';
import CardList from 'components/Card/CardList';
import {
  PizzaConteinerStyled,
  PizzaPageConteinerStyled,
} from './PizzaPageStaled';

export default function PizzaPage() {
  return (
    <PizzaConteinerStyled>
      <Header />
      <PizzaPageConteinerStyled>
        <CardList />
      </PizzaPageConteinerStyled>
    </PizzaConteinerStyled>
  );
}
