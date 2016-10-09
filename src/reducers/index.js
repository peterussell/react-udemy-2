import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  /* Maps the key (eg. book) in the redux state to the function (eg. BooksReducer)
     which produces that piece of state. */
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
