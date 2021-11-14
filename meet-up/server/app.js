const http = require('http');
var cors = require('cors');
const express = require('express');
const meetUpRouter = require('./router/meetup.route.js');
const AppDB = require('./utils/sqliteDatabase.js');
let dBSession = null;
const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{req.dataBase = dBSession; next();});
app.use('/api',meetUpRouter);
server.listen(5000,() => {
    dBSession = new AppDB('meetup.db');
    let SQLTable = `Create table if not exists meetup(
        id Integer primary key AUTOINCREMENT,
        title varchar(100),
        address varchar(300),
        image varchar(1000),
        description varchar(500)
    )`
    dBSession.createTheTable(SQLTable)
    .then(() => {
        console.log("Table created");
    })
    .catch((err) => {
        console.log(err);
    });
});