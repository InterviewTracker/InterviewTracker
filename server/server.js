const path = require('path');
const express = require('express');
const userRouter = require('./routers/userRouter.js');
const contentRouter = require('./routers/contentRouter.js');
const cookiesParser = require('cookie-parser');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;
const userController = require('./controllers/userController');


app.use(cookiesParser());
// app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// github OAuth
app.get('/github/callback', userController.getToken, userController.getGithubUser, userController.addGithubUser);

// user information
app.use('/user', userRouter);

// filtering through content information
app.use('/content', contentRouter);

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Unknown error',
    status: 400,
    message: {
      err: 'An error occurred'
    },
  };

  const errorObj = Object.assign({}, defaultErr);
  errorObj.message = err.message;
  errorObj.log = err.log;
  const errorStatus = err.status || 404;
  return res.status(errorStatus).json(errorObj.message);
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
