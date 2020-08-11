const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController.js')

router.post('/', contentController.filterContent, (req, res, next) => {
    console.log(res.body);
});

router.post('/addContent', contentController.addContent, (req, res, next) => {
    console.log(res.body);
});

router.post('/editContent', contentController.editContent, (req, res, next) => {
    console.log(res.body);
});

router.delete('/deleteContent', contentController.deleteContent, (req, res, next) => {
    res.status(200);
});


module.exports = router;