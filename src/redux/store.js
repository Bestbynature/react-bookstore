import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
