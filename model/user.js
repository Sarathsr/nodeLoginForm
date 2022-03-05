const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* User collection */
const userSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
