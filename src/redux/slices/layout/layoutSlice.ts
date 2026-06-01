import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LayoutState {
  theme: 'light' | 'dark';
  vertical: string;
}

const initialState: LayoutState = {
  theme: 'dark',
  vertical: 'default',
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setVertical: (state, action: PayloadAction<string>) => {
      state.vertical = action.payload;
    }
  },
});

export const { setTheme, setVertical } = layoutSlice.actions;
export default layoutSlice.reducer;
