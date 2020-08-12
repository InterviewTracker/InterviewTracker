const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController.js')

router.post('/', contentController.filterContent, (req, res, next) => {
  res.status(200).json(res.body)
});

router.post('/addContent', contentController.addContent, (req, res, next) => {
  res.status(200).json(res.body)
});

router.post('/editContent', contentController.editContent, (req, res, next) => {
  res.status(200).json(res.body)
});

router.delete('/deleteContent', contentController.deleteContent, (req, res, next) => {
  res.status(200).json(res.body)
});


module.exports = router;