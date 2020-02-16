var axios = require("axios");
import addUsermock from "../mockFiles/addUserMock";

var getAuthURL = "https://qa-app.transit-partners.com/api/login";
var getDeleteUser = "https://qa-app.transit-partners.com/api/Users?email=";

var body = {
  userName: "super.admin@yopmail.com",
  password: "Pass@123"
};

function getTokenAndDeleteUsers() {
  axios
    .post(getAuthURL, body)
    .then(function(result) {
      console.log(result.data.result.token);
      deleteAllusers(result.data.result.token);
    })
    .catch(function(err) {
      console.log(err);
    });
}

function deleteSuperAdmin(token, email) {
  var config = {
    headers: { Authorization: "bearer " + token }
  };
  axios
    .delete(getDeleteUser + email, config)
    .then(function(result) {
      console.log(result.data);
    })
    .catch(function(err) {
      console.log(err);
    });
}

async function deleteAllusers(token) {
  await deleteSuperAdmin(token, addUsermock.email);
  await deleteSuperAdmin(token, addUsermock.baseEmail);
  await deleteSuperAdmin(token, addUsermock.dispatcherEmail);
}
module.exports = {
  getTokenAndDeleteUsers
};
