var axios = require("axios");
import addAccountMock from "../mockFiles/addAccountsMock";
import addTripMock from "../mockFiles/tripMock";

var getAuthURL = "https://qa-app.transit-partners.com/api/login";
var getDeletePassenger =
  "https://qa-app.transit-partners.com/api/Accounts/Passenger?medicaidId=";

var body = {
  userName: "super.admin@yopmail.com",
  password: "Pass@123"
};

function getTokenAndDeletePassenger() {
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
    .delete(getDeletePassenger + email, config)
    .then(function(result) {
      console.log(result.data);
    })
    .catch(function(err) {
      console.log(err);
    });
}
async function deleteAccounts(token) {
  await deleteCreatedAccount(token);

  var config = {
    headers: { Authorization: "bearer " + token }
  };
  axios
    .delete(
      getDeletePassenger +
        addTripMock.medicaidID +
        "&accountEmail=" +
        addAccountMock.apiCallDelete,
      config
    )
    .then(function(result) {
      console.log(result.data);
    })
    .catch(function(err) {
      console.log(err);
    });
}
module.exports = {
  getTokenAndDeletePassenger
};
