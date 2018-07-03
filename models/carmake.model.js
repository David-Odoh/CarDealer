var mongo = require("../config/mongoose");

var MakeSchema = new mongo.Schema({
    make : { type: String }
});

module.exports = mongo.model('Make', MakeSchema);
