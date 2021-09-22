var express = require('express');
const { check, validationResult } = require("express-validator");
const { asyncHandler } = require("./utils");
const db = require('../db/models');
var router = express.Router();

/* GET home page. */
router.get('/', asyncHandler( async (req, res) => {
    res.render('index', { user: req.session.auth });
}));

module.exports = router;
