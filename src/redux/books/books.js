import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addBook = createAction('books/addBook', (payload) => ({
  payload,
}));

export const removeOneBook = createAction('books/removeOneBook', (payload) => ({
  payload,
}));

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WsQJJJQ05Rg6MbRzcWLl/books');
    const data = await response.text();
    let booksData = Object.entries(JSON.parse(data));
    booksData = booksData.map(([itemID, value]) => {
      const [book] = value;
      return { ...book, item_id: itemID };
    });
    return booksData;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id) => {
    const response = await
    fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WsQJJJQ05Rg6MbRzcWLl/books/${id}`, {
      method: 'DELETE',
    });
    const data = await response.text();
    return data;
  },
);

export const addBookToAPI = createAsyncThunk(
  'books/addBookToApi',
  async (book) => {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WsQJJJQ05Rg6MbRzcWLl/books', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; Charset=UTF-8',
      },
    });
    const data = await response.text();

    return data;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: null,
  },
  extraReducers: {
    [fetchBooks.fulfilled]: (state, { payload }) => {
      const newState = { ...state };
      newState.books = payload;
      newState.status = 'success';
      return newState;
    },
    [addBook]: (state, { payload }) => {
      const newState = { ...state };
      newState.books = [...state.books, payload];
      return newState;
    },
    [removeOneBook]: (state, { payload }) => {
      state.books = state.books.filter((book) => book.item_id !== payload);
    },
  },
});

export default booksSlice.reducer;
