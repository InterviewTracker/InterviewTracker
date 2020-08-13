const db = require("../model/db.js");

const contentController = {};

contentController.getContent = (req, res, next) => {
  const queryString = `SELECT * FROM interview_content`;

  db.query(queryString)
    .then((data) => {
      res.body = data.rows;
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

contentController.filterContent = (req, res, next) => {
  const { company, stack } = req.body;
  // console.log('inside filterContent', stack);
  let queryString;
  if (company && stack) {
    queryString = `SELECT * FROM interview_content WHERE company_name = '${company}' AND teck_stack = '${stack}'`;
  } else if (stack) {
    queryString = `SELECT * FROM interview_content WHERE tech_stack = '${stack}'`;
  } else if (company) {
    queryString = `SELECT * FROM interview_content WHERE company_name = '${company}'`;
  }
  // console.log(queryString);
  db.query(queryString)
    .then((data) => {
      // for (let row of data.rows) {
      // 	JSON.parse(row.form);
      // }
      res.body = data.rows;
      console.log("this is data.rows", data.rows);
      next();
    })
    .catch((err) => {
      console.log("err", err);
      next(err);
    });
};

contentController.addContent = (req, res, next) => {
  // console.log(req.body)
  const userId = 1;
  const { company, status, stack, questions, title } = req.body;

  const queryString = `INSERT INTO interview_content VALUES ('${userId}', '${company}', '${title}', '${stack}', '${status}', '${JSON.stringify(questions)}', '${req.cookies.gitHub}')`;

  db.query(queryString)
    .then((data) => {
      // console.log(data);
      res.body = data;
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

contentController.editContent = (req, res, next) => {
  console.log('editContent', req.body.questions);
  let questions = req.body.questions;
  questions = JSON.stringify(questions)
  const id =req.body.id
  // questions =json.stringify(questions)
  console.log('adadfdfasdfa',questions)

  const queryString = `UPDATE interview_content SET questions ='${questions}'  WHERE id=${id} `;

  db.query(queryString)
    .then((data) => {
      res.redirect('/content/addContent')
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

contentController.deleteContent = (req, res, next) => {
  console.log("inside deleteContent", req.body);
  const userId = 1;
  const { postId } = req.body;

  const queryString = `DELETE FROM interview_content WHERE id=${postId} AND user_id=${userId}`;

  db.query(queryString)
    .then((data) => {
      console.log(data);
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

module.exports = contentController;
