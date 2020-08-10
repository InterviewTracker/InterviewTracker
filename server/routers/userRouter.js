const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

router.get('/userFeed', userController.getFeed, (req, res, next) => {
    console.log('I am nicole wow');
});

router.get('/profile', userController.getUser, (req, res, next) => {
    
});



module.exports = router;