import { createSlice } from '@reduxjs/toolkit';

interface ProductState {
  items: any[];
}

const initialState: ProductState = {
  items: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
