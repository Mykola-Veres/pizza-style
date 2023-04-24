import Header from 'components/Header/Header';
import CardList from 'components/Card/CardList';
import { PizzaPageConteinerStyled } from './PizzaPageStaled';

export default function PizzaPage() {
  return (
    <>
      <Header />
      <PizzaPageConteinerStyled>
        <CardList />
      </PizzaPageConteinerStyled>
    </>
  );
}
