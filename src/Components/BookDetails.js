import React from "react";
import "../index.css";
import BookList from "./BookList";
import AddAuthor from "./AddAuthor";
import AddBook from "./AddBook";
import { useParams } from "react-router-dom";



const state = {
  Authors: JSON.parse(localStorage.getItem("AuthorList")),
  Books: JSON.parse(localStorage.getItem("BookList")),
  Book: "",
  AuthorDisplay: false
};

const DisplayDetails = () => {
  let Data = state.Book;
  if (Data !== []) {
    Data.Author = state.Authors.filter((author) => parseInt(Data.AuthorId) === author.id)[0];
    Data.Author.Books = state.Books.filter((book) =>
      parseInt(book.AuthorId) === Data.Author.id

    );
  }
  if (Data.BookName !== undefined){
    return (
      <div id="Book-Details">
        <h3 className="p-2"> {Data.BookName}</h3>
        <p className="p-2">Genre: {Data.Genre}</p>
        <p className="p-2">Author: {Data.Author.Name}</p>
        <hr />
        <h5 className="p-2">Other books by the Author</h5>
        {Data.Author.Books.map((book) => {
          return (
            <ul className="p-2">
              <li key={book.id}>{book.BookName}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <hr />
          No book selected...
      </div>
    );
    
  }
}

 const DisplayChoice = () => {
   if (state.AuthorDisplay === true) {
      console.log("reached")
      return(
      <div className="mb-2">
        <AddAuthor />
        </div>
      )
    }
    else {
      return(
      <div>
        <AddBook Authors={state.Authors} />
        </div>
      )
    }
}
  
const BookDetails = (props) => {

  let { bookName } = useParams()
  state.Book = state.Books.filter((book) => book.BookName === bookName)[0];
    return (
      <div className="row pt-3 ml-2">
        <div className="col-md-6 col-12 m-1" id="books-container">
          <ul>
            <BookList Books={state.Books}
            />
          </ul>
           {DisplayChoice()}
          <div className="mt-3">
            <button
              className="btn btn-info mr-3"
              onClick={(e) => {
                state.AuthorDisplay = true;
              }
                             
              }
            >
              AddAuthor
            </button>
            <button
              className="btn btn-info "
              onClick={(e) => {
                state.AuthorDisplay = false;
              }}
            >
              AddBook
            </button>
          </div>
          </div>
        <div className="col-md-5 col-12 " id="book-Display">
          {DisplayDetails({bookName})}
        </div>
      </div>
    );
  }

export default BookDetails;
