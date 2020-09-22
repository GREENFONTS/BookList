import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "../index.css";
import BookList from "./BookList";
import AddAuthor from "./AddAuthor";
import AddBook from './AddBook';
import { fetchBooks } from '../actions/bookActions';
import { fetchAuthors } from "../actions/authorActions";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: "",
      AuthorDisplay: true
    };
  }
 
  componentDidMount() {
    this.props.fetchBooks()
    this.props.fetchAuthors()
  }

  DisplayChoice() {
    if (this.state.AuthorDisplay === true) {
      return(
        <AddAuthor />
        
      )
    }
    else {
      return(
      <div>
        <AddBook Authors={this.props.authors} />
        </div>
      )
    }
  }
  render() {
   
    return (
      <div className="row pt-3 ml-2">
        <div className="col-md-6 col-12 m-1" id="books-container">
          <ul>
            <BookList Books={this.props.books} />
          </ul>
          {this.DisplayChoice()}
        
          <div className=" container mt-4">

             <button
              className="btn btn-info mr-3"
              onClick={(e) => {
                this.setState({
                  AuthorDisplay: true
                });
              }}
            >
              AddAuthor
            </button>
            {"   "}
            <button
              className="btn btn-info ml-2"
              onClick={(e) => {
                this.setState({
                  AuthorDisplay: false
                });
              }}
            >
              AddBook
            </button>
          </div>
        </div>
        <div className="col-md-5 col-12 " id="book-Display">
          No Books Selected...
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  books: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  fetchAuthors: PropTypes.func.isRequired
}

const mapStateToProps =  state => ({
  books: state.Books.books,
  authors: state.Authors.authors
})

export default connect(mapStateToProps, { fetchBooks, fetchAuthors })(Main);