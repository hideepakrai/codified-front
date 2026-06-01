import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import productReducer from './slices/product/productSlice';
import userReducer from './slices/user/userSlice';
import layoutReducer from './slices/layout/layoutSlice';
import appReducer from './slices/app/appSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    user: userReducer,
    layout: layoutReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
