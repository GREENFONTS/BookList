import { FETCH_AUTHORS, NEW_AUTHOR} from "../actions/types";

const initialState = {
  authors: [],
  author: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_AUTHORS:
      return {
        ...state,
        authors: action.payload,
      }
    case NEW_AUTHOR:
      return {
        ...state,
        author: action.payload,
      };

    default:
      return state;
  }
}