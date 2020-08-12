const db = require('../model/db.js');

const contentController = {};

contentController.filterContent = (req, res, next) => {
  const { company, stack } = req.body;
  console.log('inside filterContent', stack);
  let queryString;
  if (company && stack) {
    queryString = `SELECT * FROM interview_content WHERE company_name = '${company}' AND teck_stack = '${stack}'`;
  } else if (stack) {
    queryString = `SELECT * FROM interview_content WHERE tech_stack = '${stack}'`;
  } else if (company) {
    queryString = `SELECT * FROM interview_content WHERE company_name = '${company}'`;
  }
  console.log(queryString);
  db
    .query(queryString)
    .then((data) => {
      // for (let row of data.rows) {
      // 	JSON.parse(row.form);
      // }
      res.body = data.rows;
      console.log('this is data.rows', data.rows);
      next();
    })
    .catch((err) => {
      console.log('err', err);
      next(err);
    });
};

contentController.addContent = (req, res, next) => {
  console.log(req.body)
  const userId = 1;
  const { company, status, stack, questions, title } = req.body;

  const queryString = `INSERT INTO interview_content VALUES ('${userId}', '${company}', '${title}', '${stack}', '${status}', '${JSON.stringify(questions)}')`;

  db.query(queryString)
    .then((data) => {
      console.log(data);
      res.body = data;
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

contentController.editContent = (req, res, next) => {
  console.log('editContent', req.body);
  const userId = 2;
  const { postId, topic, updatedContent } = req.body;

  const queryString = `UPDATE interview_content SET ${topic}='${updatedContent}' WHERE user_id=${userId} AND id=${postId}`;

  db
    .query(queryString)
    .then((data) => {
      console.log(data);
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

contentController.deleteContent = (req, res, next) => {
  console.log('inside deleteContent', req.body);
  const userId = 1;
  const { postId } = req.body;

  const queryString = `DELETE FROM interview_content WHERE id=${postId} AND user_id=${userId}`;

  db
    .query(queryString)
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
