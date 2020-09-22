import React, { Component } from "react";
import { createAuthor } from "../actions/authorActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const Author = {
  id: "",
  Name: "",
  Nationality: "",
};
class AddAuthor extends Component {
 
  render() {
  let Authors = JSON.parse(localStorage.getItem("AuthorList"));
   if (Authors === null) {
     localStorage.setItem("AuthorList", JSON.stringify([]));
     Author.id = 0
   }
    return (
      <form onSubmit={() => {
        this.props.createAuthor(Author)
        
      }} className="container p-3">
        <div className="form-group">
          <label>Author Name:</label>
          <input
            className="form-control"
            type="text"
            name="Name"
            placeholder="Enter Author name"
            id="Name"
            onChange={(e) => {
              Author.Name = e.target.value ;
            }}
            required
          />
        </div>
        <div className="form-group ">
          <label>Author Nationality:</label>
          <input
            className="form-control "
            type="text"
            name="Nationality"
            placeholder="Enter Author nationality"
            id="Genre"
            onChange={(e) => {
              Author.Nationality = e.target.value;
            }}
            required
          />
        </div>
        
        <button 
          type="submit"
          id="addbutton"
        >
          +
        </button>
      </form>
    );
  }
}

AddAuthor.propTypes = {
  createAuthor: PropTypes.func.isRequired,
};

export default connect(null, { createAuthor })(AddAuthor);