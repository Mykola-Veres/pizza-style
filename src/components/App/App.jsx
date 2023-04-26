import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from '../Loader';
import { Suspense } from 'react';
import MainContainer from 'components/MainContainer/MainContainer';
import { GlobalStyle } from 'common/GlobalStyle';
import PizzaPage from '../../pages/PizzaPage';
import CartPage from '../../pages/CartPage';

export default function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PizzaPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </MainContainer>
  );
}
