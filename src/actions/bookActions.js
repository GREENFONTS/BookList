import { FETCH_BOOK, FETCH_BOOKS, NEW_BOOK, DELETE_BOOK } from "./types";

export const fetchBooks = () => (dispatch) => {
  let Books = JSON.parse(localStorage.getItem("BookList"));
  dispatch({
    type: FETCH_BOOKS,
    payload: Books,
  });
};

export const createBook = (bookData) => (dispatch) => {
  let Books = JSON.parse(localStorage.getItem("BookList"));
  bookData.id = Books.length;
  Books.push(bookData);
  localStorage.setItem("BookList", JSON.stringify(Books));

  dispatch({
    type: NEW_BOOK,
    payload: bookData,
  });
};

export const fetchBook = (bookName, Books) => (dispatch) => {
  let Book = Books.filter(
    (book) => book.BookName === bookName
  )[0];
  dispatch({
    type: FETCH_BOOK,
    payload: Book,
  });
};

export const deleteBook = (bookName, Books) => (dispatch) => {
  console.log('reached')
  let Book = Books.filter((book) => book.BookName === bookName)[0];
  Books.pop(Book)
  localStorage.setItem("BookList", JSON.stringify(Books));
  dispatch({
    type: DELETE_BOOK,
    payload: Book,
  });
};