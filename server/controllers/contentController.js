const db = require('../model/db.js');

const contentController = {};

contentController.filterContent = (req, res, next) => {
  const { company, stack } = req.body;
  console.log('inside filterContent', stack);
  let queryString;
  if (company && stack) {
    queryString = `SELECT * FROM interview_content WHERE company_name = '${company}' AND ${stack} = 'true'`;
  } else if (stack) {
    queryString = `SELECT * FROM interview_content WHERE ${stack} = 'true'`;
  } else if (company) {
    queryString = `SELECT * FROM interview_content WHERE company_name = '${company}'`;
  }
  console.log(queryString);
  db
    .query(queryString)
    .then((data) => {
      for (let row of data.rows) {
        JSON.parse(row.form);
      }
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
  const userId = req.cookie;
  const { company, status, tech_stack, form, front_end, back_end, full_stack } = req.body;

  const queryString = `INSERT INTO interview_content VALUES ('${userId}', '${company}', '${status}', '${tech_stack}', '${JSON.stringify(
    form
  )}', '${front_end}', '${back_end}', '${full_stack}')`;

  db
    .query(queryString)
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
