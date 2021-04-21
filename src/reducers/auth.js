import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../actions/actionTypes";

const initialAuthState = {
  user: {},
  errors: null,
  isLoggedIn: false,
  inProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        inProgress: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        isLoggedIn: true,
        errors: null,
        user: action.user,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        inProgress: false,
        errors: action.error,
      };
    }
    default:
      return state;
  }
}
