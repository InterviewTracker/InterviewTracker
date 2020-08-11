const db = require('../model/db.js');

const userController = {};

userController.getFeed = (req, res, next) => {
    const cookie = req.cookie;
    const queryString = `SELECT * FROM interview_content WHERE user_id != $1`
    db.query(queryString, [cookie])
    .then((data) => {
        JSON.parse(data.form);
        res.body=data
        next();
    });
    next();
};

userController.addUser = (req, res, next) => {
    const { name, userName, email, github, password } = req.body;
    const queryString = `INSERT into user_info VALUES ($1, $2, $3, $4, $5, $6)`
    db.query(queryString, [name, userName, email, password, github])
    .then((data) => {
        console.log(data);
    });
};

userController.getUser = (req, res, next) => {
    const cookie = req.cookie;
    const queryString = `SELECT * FROM user_info WHERE id =$1`;
    db.query(queryString, [cookie])
    .then((data) => {
        console.log(data);
    });
};

module.exports = userController;