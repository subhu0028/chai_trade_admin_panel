const User = require('../models/user');
const mongoose = require('mongoose');

exports.getAddUser = (req, res, next) => {
    res.render('admin/edit-user', {
        pageTitle: 'Add User',
        path: '/add-user',
        editing: false
    });
};

exports.postAddUser = (req, res, next) => {
    const userName = req.body.userName;
    const password = req.body.password;
    const email = req.body.email;
    const user = new User({
        userName: userName,
        password: password,
        email: email
        });
    user
        .save()
        .then(result => {
            console.log("User Added : " + result)
            res.status(200).json({
                custom: "User Added!!"
            })
        })
        .catch(err => {
            console.log("Error Occured : " + err)
            res.status(403).json({
                custom: "Error in posting the blog"
            })
        })
}

exports.getUsers = (req, res, next) => {
    User.find()
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

exports.getEditUser = (req, res, next) => {
    
}