import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Loader from '../Loader';
import { Suspense } from 'react';
import MainContainer from 'components/MainContainer/MainContainer';
import { GlobalStyle } from 'common/GlobalStyle';
import PizzaPage from '../../pages/CartPage';
import CartPage from '../../pages/PizzaPage';

export default function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
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
