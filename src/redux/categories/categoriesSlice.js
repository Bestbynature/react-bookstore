import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    status: (state) => {
      const { length } = state.categories;
      if (length === 0) state.categories = 'Under Construction';
    },
  },
});

export const { status } = categoriesSlice.actions;

export default categoriesSlice.reducer;
