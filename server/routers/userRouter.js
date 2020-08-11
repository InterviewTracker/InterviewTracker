const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

router.get('/userFeed', userController.getFeed, (req, res, next) => {
    res.status(200).json(res.body); 
});

router.post('/addUser', userController.addUser, (req, res, next) => {
    res.redirect('/feed');
});

router.get('/profile', userController.getUser, (req, res, next) => {
    res.status(200).json(res.body)
});



module.exports = router;