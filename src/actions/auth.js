import { APIUrls } from "../helpers/urls";
import { LOGIN_START } from "./actionTypes";
import { getFormBody } from "./../helpers/utils";

export function startLogin() {
  return;
  {
    type: LOGIN_START;
  }
}
// login?email=a@gnail&password=1234   input sent to api
export function login(email, password) {
  return (dispatch) => {
    const url = APIUrls.login();
    // fetch default is get we want post
    // content is urlencoded form
    fetch(url, {
      method: "POST",
      headers: {
        Content_Type: "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    });
  };
}
