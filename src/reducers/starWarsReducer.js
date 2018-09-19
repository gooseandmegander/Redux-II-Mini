import { FETCHING_CHARS, FETCHED_CHARS, FETCHING_ERROR } from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null,
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return { ...state, fetching: true, error: null };
    case FETCHED_CHARS:
      return { ...state, fetching: false, chars: [...action.payload], error: null };
    case FETCHING_ERROR:
      return { ...state, fetching: false, error: action.payload };
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
