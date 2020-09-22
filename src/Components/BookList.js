import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../index.css";
import { deleteBook } from "../actions/bookActions";

class BookList extends Component {
  constructor(props) {
    super(props);
   this.state = {
     isModalOpen: false,
     book: ''
   };
   }


  render() {
    let Data = this.props.Books;
    if (Data !== []) {
      return Data.map((book) => {
        return (
          <div id="BookList" className="d-inline-block">
            <div className="row">
              <span className="col-9"></span>
              <span
                className="fa fa-trash col-3 mr-auto"
                onClick={() => this.props.deleteBook(book, this.props.Books)}
              ></span>
            </div>
            <Link key={book.id} to={`/${book.BookName}`} className=" text-dark">
              {book.BookName}
            </Link>
          </div>
        );
      });

    }

    return (
      <div>
        
        <h3>No Books....</h3>
      </div>
    );
  }
}

BookList.propTypes = {
  deleteBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  book: state.Books.book
});

export default connect(mapStateToProps, { deleteBook})(BookList);
