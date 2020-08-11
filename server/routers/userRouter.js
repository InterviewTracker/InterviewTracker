const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

router.get('/userFeed', userController.getFeed, (req, res, next) => {
    console.log(res.body);
});

router.post('/addUser', userController.addUser, (req, res, next) => {
    res.json(res.body);
});

router.get('/profile', userController.getUser, (req, res, next) => {
    
});



module.exports = router;