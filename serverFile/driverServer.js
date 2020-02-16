var axios = require("axios");
import driverMock from "../mockFiles/addDriverMock";


var getAuthURL = "https://qa-app.transit-partners.com/api/login";
var getDeleteDriver = "https://qa-app.transit-partners.com/api/Drivers?licenseNumber=";

var body = {
  userName: "super.admin@yopmail.com",
  password: "Pass@123"
};

function getTokenAndDeleteDriver() {
  axios
    .post(getAuthURL, body)
    .then(function(result) {
      console.log(result.data.result.token);
      deleteDriver(result.data.result.token);
    })
    .catch(function(err) {
      console.log(err);
    });
}

function deleteDummyDriver(token, email) {
  var config = {
    headers: { Authorization: "bearer " + token }
  };
  axios
    .delete(getDeleteDriver + email, config)
    .then(function(result) {
      console.log(result.data);
    })
    .catch(function(err) {
      console.log(err);
    });
}

async function deleteDriver(token) {
  await deleteDummyDriver(token, driverMock.licenseNumber);
}

module.exports = {
  getTokenAndDeleteDriver
};
