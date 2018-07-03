const express = require('express');
const router = express.Router();
const CarMakeService = require("../services/carmake.service");
const CarMakeModel = require('../models/carmake.model');

router.post('/', (req, res, next) => {
    let carMake = new CarMakeModel({
        make : req.body.make
    });

    CarMakeService.saveMake( carMake, (err, dealer) => {
        if(err){
            res.json({success: false, msg:'Failed to add make'});
        } else {
            res.json({success: true, msg:'Make added'});
        }
        }
    );
});

router.get('/', (req, res, next) => {
    CarMakeService.getAllMakes({
        success : (result) => {
            res.json(result);
        },
        failure : (error) => {
            res.send(error);
        }
    });
});

router.get('/:make_id', (req, res, next) => {
    CarMakeService.getMakeById(req.params.make_id, {
        success : (make) => {
            res.json(make);
        },
        failure : (error) => {
            res.send(error);
        }
    });
});


router.put('/:make_id', function(req, res, next) {
    let carMake = new CarMakeModel({
        make : req.body.make
    });

    CarMakeService.updateCarMake(req.params.make_id, carMake, (err, make) => {
        if(err){
            res.json({success: false, msg:'Failed to update make'});
        } else {
            res.json({success: true, msg:'Make Updated'});
        }
        }
);
});

module.exports = router;
