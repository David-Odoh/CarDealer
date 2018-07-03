const express = require('express');
const router = express.Router();
const CarModelService = require("../services/carmodel.service");
const CarModel = require('../models/carmodel.model');


router.post('/', (req, res, next) => {
    let carModel = new CarModel({
        makeId : req.body.makeId,
        model : req.body.model
    });

    CarModelService.saveCarModel( carModel, (err, dealer) => {
        if(err){
            res.json({success: false, msg:'Failed to add Model'});
        } else {
            res.json({success: true, msg:'Model added'});
        }
        }
    );
});


router.get('/', (req, res, next) => {
    CarModelService.getAllCarModels({
        success : (result) => {
            res.json(result);
        },
        failure : (error) => {
            res.send(error);
        }
    });
});


router.get('/:model_id', (req, res, next) => {
    CarModelService.getModelById(req.params.model_id, {
        success : (model) => {
            res.json(model);
        },
        failure : (error) => {
            res.send(error);
        }
    });
});


router.put('/:model_id', function(req, res, next) {
    let carModel = new CarModel({
        makeId : req.body.makeId,
        model : req.body.model
    });

    CarModelService.updateCarModel(req.params.model_id, carModel, (err, model) => {
        if(err){
            res.json({success: false, msg:'Failed to update model'});
        } else {
            res.json({success: true, msg:'Model Updated'});
        }
        }
);
});

module.exports = router;
