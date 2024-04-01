import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/reducer';
import detailProductReducer from './detailProduct/reducer';
import cartReducer from './cart/reducer';
import addressReducer from './address/reducer';

const store = configureStore({
  reducer: {
    products: productsReducer,
    detailProduct: detailProductReducer,
    cart: cartReducer,
    address: addressReducer,
  },
});

export default store;
