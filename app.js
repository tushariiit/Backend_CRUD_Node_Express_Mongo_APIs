const express = require('express');
const app = express();
const addressRouter = require('./addressRoute')
app.use(express.json());
//const bodyParser = require("body-parser")
//app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',addressRouter);
app.listen(5000,()=>{
    console.log('listening on port 3000');
})

