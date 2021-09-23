var express = require('express');
const { check, validationResult } = require("express-validator");
const { asyncHandler } = require("./utils");
const db = require('../db/models');
var router = express.Router();

/* GET home page. */
router.get('/', asyncHandler( async (req, res) => {
    let user = {};
    if (req.session.auth) {
        const {userId} = req.session.auth;
        user = await db.User.findByPk(userId);
    }
    res.render('layout', user);
}));

module.exports = router;
