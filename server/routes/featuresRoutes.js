

const express = require('express')

const {getFeatures, editFeature} = require('../controllers/featureController.js')

const router = express.Router();

router.get('/getFeatures', getFeatures)

// router.post('/edit-user', editUser)


module.exports = router