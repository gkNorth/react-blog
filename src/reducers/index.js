import { combineReducers } from "redux";
import { INCREMENT } from "../actions";

const initialState = {};

const count = (state=initialState,action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        [action.name]: (state[action.name] || 0) + 1
      }
    default:
      return state
  }
}

export default combineReducers({count})