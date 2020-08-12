const cookieController = {};

cookieController.setCookie = (req, res, next) => {

  res.cookies('userId', res.body, { maxAge: 1000 * 60 * 120 }); // setting time
  next();
};

cookieController.verifyCookie = (req, res, next) => {
  console.log('THIS IS VERIFY COOKIE');
  next();
};

cookieController.checkGithubCookie = (req, res, next) => {
  console.log('CHECK FOR COOKIES', req.cookies);
  if(req.cookies.github){
    res.locals.login = true;
    next();
  } else {
    res.locals.login = false;
    next();
  }
}

module.exports = cookieController;