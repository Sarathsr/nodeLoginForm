const mongoose = require('mongoose')

  var mongoConn =  mongoose.connect("mongodb://127.0.0.1:27017/admin", { 
  }).then(() => {
      console.log("Connected to database");
  }).catch((err) => {
      console.log(err);
      console.log("Connection failed");
  });

module.exports = mongoConn;
