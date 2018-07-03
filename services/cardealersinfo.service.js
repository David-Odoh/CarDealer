const mongoose = require('mongoose');
const config = require('../config/database');
const Dealer = require('../models/cardealersinfo.model');

module.exports.saveDealer = (dealerInfo, callback) => {
        dealerInfo.save(callback);
    }

module.exports.getDealerById = function(dealerId, callback) {
        Dealer.findById(dealerId, function(error, dealerInfo) {
            if (error) {
                callback.failure(error);
            }
            callback.success(dealerInfo);
        });
    }

module.exports.updateDealerInfo = function(dealerId, dealerObject, callback) {
        Dealer.findById(dealerId, {
            success : function(dealerInfo) {
                 dealerInfo = dealerObject;
    
                dealerInfo.save(function(error, updateDealerInfo) {
                    if (error) {
                        callback.failure(error);
                    }

                    callback.success(updateDealerInfo);
                });
            },

            failure : callback.failure
        });
    }

module.exports.getAllCarDealers = function(callback) {
        Dealer.find(function(error, carDealers) {
            if (error) {
                callback.failure(error);
            }

            callback.success(carDealers);
        });
    }