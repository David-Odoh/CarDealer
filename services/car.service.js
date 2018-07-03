const mongoose = require('mongoose');
const config = require('../config/database');
const Car = require('../models/car.model');

module.exports.saveCar = (car, callback) => {
        car.save(callback);
    }

module.exports.getCarById = function(carId, callback) {
        Car.findById(carId, function(error, car) {
            if (error) {
                callback.failure(error);
            }
            callback.success(car);
        });
    }

module.exports.updateCarInfo = function(carId, carObject, callback) {
        Car.findById(carId, {
            success : function(car) {
                 car = carObject;
    
                car.save(callback);
            },

            failure : callback.failure
        });
    }

module.exports.getAllCars = function(callback) {
        Car.find(function(error, cars) {
            if (error) {
                callback.failure(error);
            }

            callback.success(cars);
        });
    }

