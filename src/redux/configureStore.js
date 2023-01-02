import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  category: categoryReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
