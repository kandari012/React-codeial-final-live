import { APIUrls } from "../helpers/urls";
import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from "./actionTypes";
import { getFormBody } from "./../helpers/utils";

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
// login?email=a@gnail&password=1234   input sent to api
export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin()); // will set inprogress true
    const url = APIUrls.login();
    // fetch default is get we want post
    // content is urlencoded form
    fetch(url, {
      method: "POST",
      headers: {
        Content_Type: "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        // if user login success save the user data else perform login fail action
        if (data.success) {
          //dispatch action to save user
          dispatch(loginSuccess(data.data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}
