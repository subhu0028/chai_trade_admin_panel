

const Feature = require('../models/feature.js');
const mongoose = require('mongoose');

exports.getFeatures = (req, res, next) => {
    Feature.find()
        .then(result => {
            res.status(200)
                .json({
                    data: result,
                    custom: "Fetched all users!!"
                });
        })
        .catch(err => {
            console.log("Error while Fetching Users : " + err)
            res.status(403)
                .json({
                    custom: "Error in fetching users!!" + err
                })
        })
}

exports.getEditFeature = (req, res, next) => {
    
}