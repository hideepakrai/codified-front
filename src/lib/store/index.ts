import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Page } from './pages/pageType';

interface AppState {
  currentPages: Page | null;
  allPages: Page[];
}

const initialState: AppState = {
  currentPages: null,
  allPages: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentPages: (state, action: PayloadAction<Page | null>) => {
      state.currentPages = action.payload;
    },
    setAllPages: (state, action: PayloadAction<Page[]>) => {
      state.allPages = action.payload;
    },
  },
});

export const { setCurrentPages, setAllPages } = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
