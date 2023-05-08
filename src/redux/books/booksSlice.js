import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1ee74UDSIFBzAmI6EKU0/books';
const initialState = {
  books: {},
  title: '',
  author: '',
  error: undefined,
  isLoading: false,
  count: 1,

};

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

export const postBook = createAsyncThunk('books/postBook', async (newBook) => {
  try {
    const response = await axios.post(url, newBook);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.title = action.payload;
    },
    changeAuthor: (state, action) => {
      state.author = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
        state.title = '';
        state.author = '';
      })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = false;
        state.count += 1;
      })
      .addCase(postBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.isLoading = false;
        state.count -= 1;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { changeName, changeAuthor } = booksSlice.actions;

export default booksSlice.reducer;
