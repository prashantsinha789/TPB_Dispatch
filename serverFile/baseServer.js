var axios = require("axios");
import baseMockFile from "../mockFiles/baseMock";


var getAuthURL = "https://qa-app.transit-partners.com/api/login";
var getDeleteBase = "https://qa-app.transit-partners.com/api/Organisations/TransportBase?email=";

var body = {
  userName: "super.admin@yopmail.com",
  password: "Pass@123"
};

function getTokenAndDeleteBase() {
  axios
    .post(getAuthURL, body)
    .then(function(result) {
      console.log(result.data.result.token);
      deleteDummyBase(result.data.result.token);
    })
    .catch(function(err) {
      console.log(err);
    });
}

function deleteTransportBase(token, email) {
  var config = {
    headers: { Authorization: "bearer " + token }
  };
  axios
    .delete(getDeleteBase + email, config)
    .then(function(result) {
      console.log(result.data);
    })
    .catch(function(err) {
      console.log(err);
    });
}

async function deleteDummyBase(token) {
  await deleteTransportBase(token, baseMockFile.email);
}

module.exports = {
    getTokenAndDeleteBase
};
