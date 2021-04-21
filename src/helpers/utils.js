//email=a@gnail&password=1234   input sent to api
export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // if "user name"=>"user%20name"
    let encodedValue = encodeURIComponent(params[property]); // aakash 123=>aakash&20123
    //username=rahul
    formBody.push(encodedKey + "=" + encodedValue);
  }
  //username=rahul&password=123
  return formBody.join("&");
}
