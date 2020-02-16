var axios = require("axios");
import vehicleMock from "../mockFiles/addVehicleMock";

var getAuthURL = "https://qa-app.transit-partners.com/api/login";
var getDeleteDriver =
  "https://qa-app.transit-partners.com/api/Vehicles?licensePlateNumber=";

var body = {
  userName: "super.admin@yopmail.com",
  password: "Pass@123"
};

function getTokenAndDeleteVehicle() {
  axios
    .post(getAuthURL, body)
    .then(function(result) {
      console.log(result.data.result.token);
      deleteVehicle(result.data.result.token);
    })
    .catch(function(err) {
      console.log(err);
    });
}

function deleteDummyVehicle(token, email) {
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

async function deleteVehicle(token) {
  await deleteDummyVehicle(token, vehicleMock.lNo);
}

module.exports = {
  getTokenAndDeleteVehicle
};
