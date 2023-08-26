import { configureStore } from '@reduxjs/toolkit';
import reducers from './slices/cart';

export default configureStore({ reducer: { cart: reducers } });
