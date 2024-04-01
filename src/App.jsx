import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import DetailProductPage from './pages/DetailProductPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<DetailProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </main>
  );
}

export default App;
