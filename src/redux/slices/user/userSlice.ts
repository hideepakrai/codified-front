import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  details: any | null;
}

const initialState: UserState = {
  details: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
