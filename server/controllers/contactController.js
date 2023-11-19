

const Contact = require('../models/contact.js');
const mongoose = require('mongoose');

exports.getContacts = (req, res, next) => {
    Contact.find()
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

exports.getEditContact = (req, res, next) => {
    
}