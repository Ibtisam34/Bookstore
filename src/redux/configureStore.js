import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer, { fetchBooks } from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  categories: categoryReducer,
});

const store = configureStore({
  reducer,
});
store.dispatch(fetchBooks());

export default store;
