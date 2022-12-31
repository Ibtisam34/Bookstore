import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer, { fetchBooks } from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  category: categoryReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
store.dispatch(fetchBooks());
export default store;
