import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import productReducer from './slices/product/productSlice';
import userReducer from './slices/user/userSlice';
import layoutReducer from './slices/layout/layoutSlice';
import pageReducer from './slices/pages/pagesSlice';
import blueprintReducer from './slices/blueprint/blueprintSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    user: userReducer,
    layout: layoutReducer,
    pages: pageReducer,
    blueprint: blueprintReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
