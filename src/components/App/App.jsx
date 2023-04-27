import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from '../Loader';
import { Suspense, lazy } from 'react';
import MainContainer from 'components/MainContainer/MainContainer';
import { GlobalStyle } from 'common/GlobalStyle';

const PizzaPage = lazy(() => import('../../pages/PizzaPage'));
const CartPage = lazy(() => import('../../pages/CartPage'));

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
