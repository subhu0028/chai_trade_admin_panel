
const express = require('express')

const {getCharts, editChart} = require('../controllers/chartsController.js')

const router = express.Router();

router.get('/getCharts', getCharts)

// router.post('/edit-user', editUser)


module.exports = router