import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  books: booksReducer,
  categories: categoryReducer,
});

const store = configureStore({
  reducer,
});

export default store;
