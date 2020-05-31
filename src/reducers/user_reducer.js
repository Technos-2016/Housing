import {
  USER_LOGOUT,
  SET_CURRENT_USER,
  SET_TOKEN,
  FETCH_CURRENT_USER_START,
  FETCH_CURRENT_USER_ERROR,
  FETCH_CURRENT_USER_STOP
} from "../actions/types";

const initialState = {
  is_fetching_user: false,
  user_fetch_error: false,
  user: {},
  token: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOGOUT:
      return {
        ...state,
        is_fetching_user: false,
        user_fetch_error: false,
        user: {},
      };
    case FETCH_CURRENT_USER_START:
      return {
        ...state,
        is_fetching_user: true,
        user_fetch_error: false,
      };
    case FETCH_CURRENT_USER_STOP:
      return {
        ...state,
        is_fetching_user: false,
        user_fetch_error: false,
      };
    case FETCH_CURRENT_USER_ERROR:
      return {
        ...state,
        is_fetching_user: false,
        user_fetch_error: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state
  }
}
