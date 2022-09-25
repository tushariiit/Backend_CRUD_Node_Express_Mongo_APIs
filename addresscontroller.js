//const addressModel = require('addressModel.js');
const addressModel = require('./addressModel');

module.exports.getAddress = async function getAddress(req,res) {
    try{
        let id = req.body.id;
        let address = await addressModel.findById(id);
        if(address){
            res.json({
                message: "Here is the address you asked!!",
                address: address
            })
        }else{
            res.json({
                message: "No address found with given id :("
            })
        }
    }catch(err){
        console.log(err.message);
    }
}

module.exports.addAddress = async function addAddress(req,res) {
    try {
        let newAddress = req.body;
        console.log(newAddress);
        let add = await addressModel.create(newAddress);
        if(add){
            res.json({
                message: "Address added successfully",
                address: add
            })
        }else{
            res.json({
                message: "Could not add address :("
            })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.deleteAddress = async function deleteAddress(req,res) {
    try {
        let id = req.body.id;
        let user = await addressModel.findByIdAndDelete(id);
        if(user){
            res.json({
                message: "Address deleted Successfully !!"
            })
        }else{
            res.json({
                message: "Could Not delete Address !!"
            })
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports.updateAddress = async function updateAddress(req,res) {
    try {
        let id = req.body.id;
       
        let add = await addressModel.findById(id);
        console.log(add);
        if(add){
            let newAdd = req.body;
            let keys = [];
            for(key in newAdd){
                keys.push(key);
            }
            console.log(keys);
            for(let i=0;i<keys.length;i++){
                console.log(keys[i]);
                add[keys[i]] = newAdd[keys[i]];
            }
            console.log(add);
            add.isNew = false;
            const updatedAdd = await add.save();
            res.json({
                message: "Address updated Successfully",
                NewAddress: updatedAdd
            });
        }else{
            res.json({
                message: "NO such user Found :("
            })
        }

    } catch (error) {
        res.json({
            message: error
        })
    }
}