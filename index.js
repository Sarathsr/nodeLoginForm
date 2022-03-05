const express = require('express')
const app = express();
const routes= require('./router/path');
const db = require('./config/db');

app.use('/api',routes);

app.listen(3000,function(){
    console.log("listening to 3000!!!");
})