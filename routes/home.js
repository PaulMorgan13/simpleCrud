//handle the get request  
// handle the post request

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) //read
router.post('/new', homeController.createItem) //create


module.exports = router  
