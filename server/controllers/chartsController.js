

const Chart = require('../models/chart.js');
const mongoose = require('mongoose');

exports.getCharts = (req, res, next) => {
    Chart.find()
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

exports.getEditChart = (req, res, next) => {
    
}