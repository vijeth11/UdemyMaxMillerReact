const express = require('express');
const bodyParser = require('body-parser');
const meetUpRouter = require('./router/meetup.route.js');
const { AppDB } = require('./utils/sqliteDatabase.js');
let dBSession = null;
const app = express()
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next)=>{req.dataBase = dBSession; next();});
app.use('/api',meetUpRouter);
app.listen(5000,() => {
    dBSession = new AppDB('meetup.db');
});