const express = require('express');
const router = express.Router();
const CarService = require("../services/car.service");
const Car = require('../models/car.model');


router.post('/', (req, res, next) => {
    let car = new Car({
        carDealerId : req.body.carDealerId,
        carModelId : req.body.carModelId
    });

    CarService.saveCar( car, (err, _car) => {
        if(err){
            res.json({success: false, msg:'Failed to add car'});
        } else {
            res.json({success: true, msg:'Car added'});
        }
        }
    );
});


router.get('/', (req, res, next) => {
    CarService.getAllCars({
        success : (result) => {
            res.json(result);
        },
        failure : (error) => {
            res.send(error);
        }
    });
});


router.get('/:car_id', (req, res, next) => {
    CarService.getCarById(req.params.car_id, {
        success : (car) => {
            res.json(car);
        },
        failure : (error) => {
            res.send(error);
        }
    });
});


router.put('/:car_id', function(req, res, next) {
    let car = new Car({
        carDealerId : req.body.carDealerId,
        carModelId : req.body.carModelId
    });

    CarService.updateCarInfo(req.params.car_id, car, (err, _car) => {
        if(err){
            res.json({success: false, msg:'Failed to update car'});
        } else {
            res.json({success: true, msg:'Car Updated'});
        }
        }
);
});

module.exports = router;
