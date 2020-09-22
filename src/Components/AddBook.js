import React, { Component } from "react";
import { createBook } from "../actions/bookActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../index.css";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";

export const Book = {
  id : "",
  BookName: "",
  Genre: "",
  AuthorId: "",
};
class AddBook extends Component {
 
  DisplayAuthors() {
    let Data = this.props.Authors
    if (Data === [] || Data === undefined) {
      return (
        <option disabled>No saved Author...</option>
      )
    }
    else {
      
      return Data.map(author => {
        return (
          <option
            key={author.id}
            value={author.id}
          > {author.Name}</option>
        )
      })
    }
  }
      

    


  render() {
     let Books = JSON.parse(localStorage.getItem("BookList"));
     if (Books === null) {
       localStorage.setItem("BookList", JSON.stringify([]));
       Book.id = 0
     }
    return (
      <Form
        onSubmit={(e) => {
          this.props.createBook(Book);
        }}
        className="container p-2 m-2"
      >
        <FormGroup className="form-group">
          <Label>Book Name:</Label>
          <Input
            className="form-control"
            type="text"
            name="Name"
            placeholder="Enter book name"
            id="Name"
            onChange={(e) => {
              Book.BookName = e.target.value;
            }}
            required
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label>Book Genre:</Label>
          <Input
            className="form-control"
            type="text"
            name="Genre"
            placeholder="Enter book genre"
            id="Genre"
            onChange={(e) => {
              Book.Genre = e.target.value;
            }}
            required
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label>Author: </Label>
          <select
            id="authors"
            className="form-control"
            onChange={(e) => {
              Book.AuthorId = e.target.value;
            }}
            required
          >
            <option>Select Author</option>
            {this.DisplayAuthors()}
          </select>
        </FormGroup>

        <Button
          // className="btn btn-info rounded-circle "
          type="submit"
          id="addbutton"
        >
          +
        </Button>
      </Form>
    );
  }
}

AddBook.propTypes = {
  createBook: PropTypes.func.isRequired
};

export default connect(null, {createBook})(AddBook);

