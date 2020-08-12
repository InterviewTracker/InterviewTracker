const express = require("express");
const userController = require("../controllers/userController.js");
const request = require("superagent");
const router = express.Router();
const cookieController = require('../controllers/cookieController.js')

router.get('/userFeed', userController.getFeed, (req, res, next) => {
  res.json(res.locals.data);
});

router.get('/checkLogin', cookieController.checkGithubCookie, (req, res, next) => {
  res.json(res.locals.login);
})

router.post("/addUser", userController.addUser, (req, res, next) => {
  res.json(res.body);
});

router.get("/profile", userController.getUser, (req, res, next) => { });

module.exports = router;
