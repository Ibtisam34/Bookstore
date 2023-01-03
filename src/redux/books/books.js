import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_SUCCESS = 'bookStore/books/FETCH_SUCCESS';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return (state.filter((book) => book.item_id !== action.id));
    case ADD_BOOK:
      return ([...state, action.payload]);
    case FETCH_SUCCESS:
      return ([...action.payload]);
    default:
      return state;
  }
};

export default booksReducer;

export const remove = (id) => ({
  type: REMOVE_BOOK,
  id,
});
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const fetchBooksSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WsQJJJQ05Rg6MbRzcWLl/books');
    return response.json();
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id) => {
    const response = await
    fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WsQJJJQ05Rg6MbRzcWLl/books/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },
);

export const addBookToAPI = createAsyncThunk(
  'books/addBookToApi',
  async (book) => {
    const response = await
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WsQJJJQ05Rg6MbRzcWLl/books', {
      method: 'POST',
      body: JSON.stringify(book),
    });
    return response.json();
  },
);
