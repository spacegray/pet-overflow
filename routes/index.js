var express = require('express');
const { check, validationResult } = require("express-validator");
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require("./utils");
var router = express.Router();

/* GET home page. */
router.get('/',
           csrfProtection,
           asyncHandler( async (req, res) => {
    let user = {};
    if (req.session.auth) {
        const {userId} = req.session.auth;
        user = await db.User.findByPk(userId);
    }
    res.render('layout', {
        csrfToken: req.csrfToken()
    });
}));

router.get("/about", asyncHandler(async (req, res) => {
res.render("about-us");
  })
);

module.exports = router;
