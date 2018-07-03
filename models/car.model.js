var mongo = require("../config/mongoose");

var CarSchema = new mongo.Schema({
    carDealerId : { type: String },
    carModelId : { type: String },
});

module.exports = mongo.model('Car', CarSchema);
