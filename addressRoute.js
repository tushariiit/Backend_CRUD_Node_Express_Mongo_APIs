const express = require('express');
//const app = express();
const addressRouter = express.Router();
const {getAddress, addAddress, deleteAddress, updateAddress} = require('./addresscontroller');
//app.use('/',addressRouter);

addressRouter
.route('/getAdd')
.get(getAddress)

addressRouter
.route('/addAdd')
.post(addAddress)

addressRouter
.route('/updateAddress')
.patch(updateAddress)

addressRouter
.route('/delAdd')
.delete(deleteAddress)

module.exports = addressRouter;