

const Application = require('../models/application.js');
const mongoose = require('mongoose');

exports.getApplications = (req, res, next) => {
    Application.find()
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

exports.getEditApplication = (req, res, next) => {
    
}