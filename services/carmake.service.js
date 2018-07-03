const mongoose = require('mongoose');
const config = require('../config/database');
const Make = require('../models/carmake.model');

module.exports.saveMake = (carMake, callback) => {
        carMake.save(callback);
    }

module.exports.getMakeById = function(makeId, callback) {
        Make.findById(makeId, function(error, carMake) {
            if (error) {
                callback.failure(error);
            }
            callback.success(carMake);
        });
    }

module.exports.updateCarMake = function(makeId, makeObject, callback) {
        Make.findById(makeId, {
            success : function(carMake) {
                 carMake = dealerObject;
    
                carMake.save(callback);
            },

            failure : callback.failure
        });
    }

module.exports.getAllMakes = function(callback) {
        Make.find(function(error, carMakes) {
            if (error) {
                callback.failure(error);
            }

            callback.success(carMakes);
        });
    }

