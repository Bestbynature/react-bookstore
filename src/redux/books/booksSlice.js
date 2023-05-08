import { createSlice } from '@reduxjs/toolkit';
import booksArray from '../../booksArray';

const initialState = {
  books: booksArray,
  title: '',
  author: '',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { length } = state.books;
      const newBook = {
        item_id: `item${length + 1}`,
        category: 'Action',
        title: action.payload.title,
        author: action.payload.author,
      };
      state.title = '';
      state.author = '';
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
    changeName: (state, action) => {
      state.title = action.payload;
    },
    changeAuthor: (state, action) => {
      state.author = action.payload;
    },
  },
});
export const {
  addBook, removeBook, changeName, changeAuthor,
} = booksSlice.actions;

export default booksSlice.reducer;
