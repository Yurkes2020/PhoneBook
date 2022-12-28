import { createSlice } from '@reduxjs/toolkit';

const sliceFilter = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filter } = sliceFilter.actions;
export const filterReducer = sliceFilter.reducer;
