const db = require('../model/db.js');
const axios = require('axios');

const userController = {};

userController.verifyUser = (req, res, next) => {
  const { userName, password } = req.body;

  const queryString = `SELECT * FROM user_info WHERE user_name = ${userName} AND password = ${password}`;

  db.query(queryString)
    .then((data) => {
      if (!data.rows.length) {
        console.log('THERE IS NO DATA')
        res.status(404).JSON({ err: 'Incorrect username or password' });
      } else {
        res.body = data.rows[0].id;
        next();
      }
    })
    .catch((err) => {
      console.log(err);
      next(err);
    })
}

userController.getFeed = (req, res, next) => {
  //   console.log('user/userFeed/')
  const cookie = 4;
  const queryString = `SELECT * FROM interview_content WHERE user_id != ${cookie}`;
  db.query(queryString, cookie)
    .then((data) => {
      // for(let row of data.rows){
      //     JSON.parse(row.form);
      // };
      console.log(data.rows)
      res.locals.data = data.rows;
      next();
    })
    .catch((err) => {
      next(err);
    })
};

userController.addUser = (req, res, next) => {
    console.log('THIS IS ADD USER BODY', req.body)
    const { name, userName, email, github, password } = req.body;  
    const checkQuery = `SELECT * FROM user_info WHERE github = '${github}'`
    db.query(checkQuery)
    .then((data => {
      if (data.rows){
          res.redirect('/user/userFeed');
      } else {
        const queryString = `INSERT into user_info VALUES ('${name}', '${userName}', '${email}', '${password}', '${github}')`
        db.query(queryString)
        .then((data) => {
            res.body = data.rows
            
            // res.redirect('/user/getFeed');
            next();
        })
        .catch((err) => {
            next(err); 
        });
      }
    }))
};

userController.getUser = (req, res, next) => {
  const cookie = req.cookie;
  const queryString = `SELECT * FROM user_info WHERE id = ${cookie}`;
  db.query(queryString)
    .then((data) => {
      res.body = data.rows;
      next();
    })
    .catch((err) => {
      next(err);
    });
};

userController.getToken = (req, res, next) => {
    const code = req.query.code;
    console.log('CODE: ', code)
    axios.post('https://github.com/login/oauth/access_token', {
        client_id: 'c9608cb1875cd40998af',
        client_secret: 'f3b4e248db6f39f88ca7ea436e0432db148a7e15',
        code: code,
      }, {
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        res.locals.accessToken = response.data.access_token;
        // send back to client & redirect
        next();
      })
  }

  userController.getGithubUser = (req, res, next) => {
    console.log('res.locals.accessToken: ', res.locals.accessToken);
    axios.get('https://api.github.com/user', {
        headers: {
            'Authorization': `token ${res.locals.accessToken}`
        }
    })
    .then(data => {
        if (data) {
          console.log('DATA NAME: ', data.data.name);
          res.locals.githubdata = data.data;
          next();
        } else {
          return res.redirect('/');
        }
    })
    .catch((err) => {
        console.log(err);
    })
  }

  userController.addGithubUser = (req, res, next) => {
    axios.post('http://localhost:8080/user/addUser', {
        name: res.locals.githubdata.name, 
        userName: res.locals.githubdata.login, 
        email: res.locals.githubdata.email, 
        github: res.locals.githubdata.login, 
        password: null, 
      }, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then (() => {
            console.log('REDIRECTING TO USERFEED');
            return res.redirect('/user/userFeed');
          })
        .catch((err) => {
            console.log('THIS IS THE ERROR FROM ADDING USER', err);
        });
  }



module.exports = userController;