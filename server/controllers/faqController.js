


const Faq = require('../models/faq.js');
const mongoose = require('mongoose');

exports.getFaqs = (req, res, next) => {
    Faq.find()
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

exports.getEditFaq = (req, res, next) => {
    
}