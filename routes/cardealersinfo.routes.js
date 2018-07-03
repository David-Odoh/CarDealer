const express = require('express');
const router = express.Router();
const CarDealerService = require("../services/cardealersinfo.service");
const CarDealerInfo = require('../models/cardealersinfo.model');

/**
 * persists a car dealer info
 */
router.post('/', (req, res, next) => {
    let carDealer = new CarDealerInfo({
        name : req.body.name,
        phoneNo : req.body.phoneNo,
        email : req.body.email,
        location : req.body.location,
        address : req.body.address
    });

    CarDealerService.saveDealer( carDealer, (err, dealer) => {
        if(err){
            res.json({success: false, msg:'Failed to add dealer'});
        } else {
            res.json({success: true, msg:'Dealer added'});
        }
        }
    );
});

/**
 * gets all dealer that have been persisted
 */
router.get('/', (req, res, next) => {
    CarDealerService.getAllCarDealers({
        success : (result) => {
            res.json(result);
        },
        failure : (error) => {
            res.send(error);
        }
    });
});

/**
 * gets an existing dealer by it's id
 */
router.get('/:dealer_id', (req, res, next) => {
    CarDealerService.getDealerById(req.params.dealer_id, {
        success : (dealer) => {
            res.json(dealer);
        },
        failure : (error) => {
            res.send(error);
        }
    });
});

/**
 * updates a dealer info
 */
router.put('/:dealer_id', function(req, res, next) {
    let carDealer = new CarDealerInfo({
        name : req.body.name,
        phoneNo : req.body.phoneNo,
        email : req.body.email,
        location : req.body.location,
        address : req.body.address
    });

    CarDealerService.updateDealerInfo(req.params.dealer_id, carDealer, (err, dealer) => {
        if(err){
            res.json({success: false, msg:'Failed to update dealer'});
        } else {
            res.json({success: true, msg:'Dealer Updated'});
        }
        }
);
});

  
module.exports = router;
