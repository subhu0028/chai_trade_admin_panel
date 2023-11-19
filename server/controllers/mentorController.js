
const Mentor = require('../models/mentor.js');
const mongoose = require('mongoose');

exports.getMentors = (req, res, next) => {
    Mentor.find()
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

exports.getEditMentor = (req, res, next) => {
    
}