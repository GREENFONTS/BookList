import { FETCH_AUTHORS, NEW_AUTHOR } from "./types";

export const fetchAuthors = () => (dispatch) => {
    let Authors = JSON.parse(localStorage.getItem("AuthorList"));
    dispatch({
      type: FETCH_AUTHORS,
      payload: Authors,
    });
};

export const createAuthor = (authorData) => (dispatch) => {
  console.log("reached");
  let Authors = JSON.parse(localStorage.getItem("AuthorList"));
  authorData.id = Authors.length;
  Authors.push(authorData);
  localStorage.setItem("AuthorList", JSON.stringify(Authors));

  dispatch({
    type: NEW_AUTHOR,
    payload: authorData,
  });
};
