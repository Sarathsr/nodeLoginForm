const express = require("express");
var router = express.Router();


const main= require('../controller/main');
router.post('/signin',main.signin);

module.exports = router;



