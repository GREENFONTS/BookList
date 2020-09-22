import { FETCH_BOOK, FETCH_BOOKS, NEW_BOOK, DELETE_BOOK } from "../actions/types";

const initialState = {
  books: [],
  book: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case FETCH_BOOK:
      console.log("working");
      return {
        ...state,
        book: action.payload,
      };
    case NEW_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    case DELETE_BOOK:
      return {
        ...state,
        book: action.payload,
      };

    default:
      return state;
  }
}
