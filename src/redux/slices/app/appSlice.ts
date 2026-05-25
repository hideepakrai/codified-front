import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  currentPages: any | null;
}

const initialState: AppState = {
  currentPages: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentPages: (state, action: PayloadAction<any>) => {
      state.currentPages = action.payload;
    },
  },
});

export const { setCurrentPages } = appSlice.actions;
export default appSlice.reducer;
