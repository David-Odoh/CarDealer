const mongoose = require('mongoose');
const config = require('../config/database');
const Model = require('../models/carmodel.model');

module.exports.saveCarModel = (carModel, callback) => {
        carModel.save(callback);
    }

module.exports.getModelById = function(modelId, callback) {
        Model.findById(modelId, function(error, carModel) {
            if (error) {
                callback.failure(error);
            }
            callback.success(carModel);
        });
    }

module.exports.updateCarModel = function(modelId, modelObject, callback) {
        Model.findById(modelId, {
            success : function(carModel) {
                 carModel = modelObject;
    
                carModel.save(callback);
            },

            failure : callback.failure
        });
    }

module.exports.getAllCarModels = function(callback) {
        Model.find(function(error, carModels) {
            if (error) {
                callback.failure(error);
            }

            callback.success(carModels);
        });
    }

