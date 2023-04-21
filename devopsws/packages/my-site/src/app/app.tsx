// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Route, Routes } from 'react-router-dom';

import { PageTitle } from '@devopsws/ui-header';
import { HomePage, OrderPage, ProductPage } from '../pages';

export function App() {
  return (
    <>
      <PageTitle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;
