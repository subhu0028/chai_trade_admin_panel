
const express = require('express')

const {getBlogs, editBlog} = require('../controllers/blogController.js')

const router = express.Router();

router.get('/getBlogs', getBlogs)

// router.post('/edit-user', editUser)


module.exports = router