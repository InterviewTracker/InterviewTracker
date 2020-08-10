const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('CONTENT ROUTER');
});

module.exports = router;