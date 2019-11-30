const fs = require("fs");

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "192.168.111.212",
  user: "sa",
  password: "f2PgT2mI6m",
  database: "TransportDispatch"
});

con.connect(function(err) {
  if (err) console.log(err);
  console.log("Connected!");
  {
    if (err) console.log(err);
    // console.log(result);
  }
});
