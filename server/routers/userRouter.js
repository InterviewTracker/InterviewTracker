const express = require('express');
const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/cookieController.js');

const router = express.Router();


router.get('/login', userController.verifyUser, cookieController.setCookie, (req, res, next) => {
    res.redirect('/user/userFeed'); // double check routing
});

router.post('/addUser', cookieController.setCookie, userController.addUser, (req, res, next) => {
    res.redirect('/user/userFeed');
});

router.get('/userFeed', cookieController.verifyCookie, userController.getFeed, (req, res, next) => {
    res.status(200).json(res.body); 
});

router.get('/profile', cookieController.verifyCookie, userController.getUser, (req, res, next) => {
    res.status(200).json(res.body)
});



module.exports = router;