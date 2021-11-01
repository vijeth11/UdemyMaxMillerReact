const express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next) => {
    res.send("needs to be implemented");
})
app.listen(5000);