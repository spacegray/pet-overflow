var express = require('express');
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { asyncHandler } = require("./utils");
const db = require('../db/models');

/* GET home page. */
router.get('/', asyncHandler( async (req, res) => {
    if (req.session.auth) {
        const {userId} = req.session.auth;
        const user = await db.User.findByPk(userId);
        console.log(userId, user.userName);
        res.render('index', user);
    } else {
        res.render('index');
    }
}));

module.exports = router;
