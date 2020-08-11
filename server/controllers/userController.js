const db = require('../model/db.js');

const userController = {};

userController.getFeed = (req, res, next) => {
    const cookie = 1;
    const queryString = `SELECT * FROM interview_content WHERE user_id != ${cookie}`
    db.query(queryString, cookie)
    .then((data) => {
        JSON.parse(data.form);
        for(let row of data.rows){
            JSON.parse(row.form);
        };
        res.body = data.rows;
        next();
    })
    .catch((err) => {
        next(err); 
    })
};

userController.addUser = (req, res, next) => {
    console.log('THIS IS ADD USER BODY', req)
    const { name, userName, email, github, password } = req.body;
    const queryString = `INSERT into user_info VALUES ('${name}', '${userName}', '${email}', '${password}', '${github}')`
    db.query(queryString)
    .then((data) => {
        res.body = data.rows
        next();
    })
    .catch((err) => {
        next(err); 
    });
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

module.exports = userController;