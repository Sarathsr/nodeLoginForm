
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../model/user');

exports.signin = (req, res) => {
    var reqData = req.query;
    //check if email and password not empty
    if (reqData.email == '' || reqData.password == '') {
        res.send({
            ecode: 1,
            message: "Please fill both email and password",
            data: null
        });
    }
    else {
        // Check if user exists or not
        User.findOne({
            email: reqData.email,
            password: reqData.password
        }).then(function (user) {
            if (!user) {
                // If user not found, send error message.
                //Do not show error message seperately for email and passwrod for security reasons
                res.send({
                    ecode: 1,
                    message: "User not found!Please check the credentials used.",
                    data: null
                });
            } else {
                //create token and send back to client
                let payload = { subject: user._id };
                let token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
                res.send({
                    ecode: 0,
                    message: "success",
                    data: { token: token }
                });
            }
        });
    }
}

//user data insert query
// var newUser = new User({
//    fname:"User",
//    lname:"lname",
//    email:"user1@gmail.com",
//    password:"password"
// });
// newUser.save().then(userdata => {
//     // Save data to the DB when new user has been created successfully
//     if (userdata) {
//         console.log(userdata);
//     } else {
//     }
// }).catch(err => {
//         console.log(err);
// });