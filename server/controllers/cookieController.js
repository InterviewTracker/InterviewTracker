const cookieController = {};

cookieController.setCookie = (req, res, next) => {

  res.cookies('userId', res.body, { maxAge: 1000 * 60 * 120 }); // setting time
  next();
};

cookieController.verifyCookie = (req, res, next) => {
  console.log('THIS IS VERIFY COOKIE');
  next();
};

module.exports = cookieController;