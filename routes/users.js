const { asyncHandler } = require('./utils');
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', asyncHandler(async (req, res, next) => {
    console.log('hello from user router');
}));

module.exports = router;
