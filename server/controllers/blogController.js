

const Blog = require('../models/blog.js');
const mongoose = require('mongoose');

exports.getBlogs = (req, res, next) => {
    Blog.find()
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

exports.getEditBlog = (req, res, next) => {
    
}