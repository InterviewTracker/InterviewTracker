const express = require("express");
const userController = require("../controllers/userController.js");
const request = require("superagent");
const router = express.Router();

// router.get('/userFeed', userController.getFeed, (req, res, next) => {
//     console.log(res.body);
// });

router.get("/userFeed", (req, res, next) => {
  const { query } = req;
  console.log("query: ", query);
  const { code } = query;

  if (!code) {
    return res.send({
      sucess: false,
      message: "Error: no code",
    });
  }
  request
    .post("https://github.com/login/oauth/access_token")
    .send({
      client_id: "c9608cb1875cd40998af",
      client_secret: "f3b4e248db6f39f88ca7ea436e0432db148a7e15",
      code: code,
      scope: "user",
    })
    .set("Accept", "application/json")
    .then(function (result) {
      const data = result.body;
      console.log('RESULT:', result)
      console.log("DATA: ", data);
      res.redirect("/");
    //   res.send(data);
    });
  console.log("code: ", code);
});
//somehow I want to combine this get request with the one above.
//I think I need to make a get request setting the accessToken as a header
//in order to get the user info I need to create a new user.
router.get("/", (req, res, next) => {
  const accessToken = "c042bf2e08fadde283848d9eea456a3b20e56d5d";
  request
    .get("https://api.github.com/user")
    .set("Authorization", "token " + accessToken)
    .then(function (result) {
      console.log("result.body: ", result.body);
      console.log('result: ', result)

      // res.send(result.body)
    });
});

router.post("/addUser", userController.addUser, (req, res, next) => {
  res.json(res.body);
});

router.get("/profile", userController.getUser, (req, res, next) => {});

module.exports = router;
