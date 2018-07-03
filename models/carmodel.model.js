var mongo = require("../config/mongoose");

var ModelSchema = new mongo.Schema({
    makeId : { type: String },
    model : { type: String }
});

module.exports = mongo.model('Model', ModelSchema);
