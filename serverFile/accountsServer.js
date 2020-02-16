var axios = require("axios");
import addAccountMock from "../mockFiles/addAccountsMock";

var getAuthURL = "https://qa-app.transit-partners.com/api/login";
var getDeleteAccount = "https://qa-app.transit-partners.com/api/Accounts?email=";

var body = {
  userName: "super.admin@yopmail.com",
  password: "Pass@123"
};

function getTokenAndDeleteAccount() {
  axios
    .post(getAuthURL, body)
    .then(function(result) {
      console.log(result.data.result.token);
      deleteAccounts(result.data.result.token);
    })
    .catch(function(err) {
      console.log(err);
    });
}

function deleteCreatedAccount(token, email) {
  var config = {
    headers: { Authorization: "bearer " + token }
  };
  axios
    .delete(getDeleteAccount + email, config)
    .then(function(result) {
      console.log(result.data);
    })
    .catch(function(err) {
      console.log(err);
    });
}

async function deleteAccounts(token) {
  await deleteCreatedAccount(token, addAccountMock.email);
}
module.exports = {
  getTokenAndDeleteAccount
};
