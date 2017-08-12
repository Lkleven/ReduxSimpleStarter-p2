import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

//this reducer is adding a key to our global application state = books
//Any key to the object that is provided to the combineReducer  ends up as a key on our global state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
