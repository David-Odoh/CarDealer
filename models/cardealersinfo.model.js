const mongo = require("../config/mongoose");

const CarDealerInfoSchema = new mongo.Schema({
    name : { type: String },
    phoneNo : { type: String },
    email : { type: String },
    location : { type: String },
    address : { type: String }
});

const CarDealerInfo = module.exports = mongo.model('CarDealerInfo', CarDealerInfoSchema);
